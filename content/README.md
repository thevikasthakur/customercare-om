# The CustomerCare.OM article publishing machine

One article publishes every day at `customercare.om/blog/`. This document is
the single source of truth for how the machine works, how to set it up on a
fresh machine, and how to operate it.

The design merges the proven parts of four sibling generators (aiinoman,
omanvision2040, inzint/oman-website, amaal-static) and fixes their documented
failures. The content store is block JSON per article (never model-authored
HTML), and every derived artefact (index, RSS, sitemap, llms.txt, Markdown
twins) is rebuilt from that store at deploy time, so nothing can go stale.

## The pipeline

```text
launchd (~/Library/LaunchAgents/com.customercare.article-generator.plist)
  -> scripts/run-article-gen-wrapper.sh   (daily success marker + retry + staleness alert)
      -> scripts/run-article-gen.sh       (env, token auth, git pull, generate, validate, commit, push)
          -> npm run articles:generate
              -> scripts/generate-daily-article.mjs
                  -> picks today's task (CLI override > dated override > weekday lane bank)
                  -> builds the prompt (Oman almanac by date proximity, link candidates,
                     recent coverage, evidence and voice rules)
                  -> claude -p with WebSearch/WebFetch and a strict JSON schema
                  -> deterministic clean-up (dash strip, heading ids, source self-heal)
                  -> validate; on failure ONE repair call with the exact errors
                  -> near-duplicate and slug guards
                  -> atomic write to content/articles/<slug>.json
                  -> whole-library re-validation, rollback if it regressed
  -> git push to main -> Netlify builds -> the article is live
```

At build time (`npm run build` on Netlify):

- `prebuild` runs `scripts/validate-articles.mjs`, so an invalid store fails
  the deploy instead of shipping.
- `/blog/` and `/blog/<slug>/` are exported from the JSON store.
- `/blog/feed.xml` (RSS 2.0) is exported by a route handler.
- `src/app/sitemap.ts` includes every article with its real `modifiedDate`.
- `scripts/ai-readability.mjs` gives every blog page a Markdown twin (served
  from the same URL via `Accept: text/markdown` content negotiation) and adds
  a Blog section to `/llms.txt` with the 30 newest articles.

## Content files

| File | Role |
|---|---|
| `content/articles/<slug>.json` | one article per file; the only thing the generator writes |
| `content/daily-editorial.json` | 7 weekday lanes with rotating topic banks, dated overrides, site link targets, banned-term settings |
| `content/oman-context.json` | the Oman almanac: national dates, Islamic dates (moon-sighting aware), seasonal windows, regulatory milestones; injected into the prompt by date proximity |
| `content/source-registry.json` | registered source leads (MTCIT, TRA, Ministry of Labour, ONA, media) offered per task |

### The weekday lanes

| Day | Lane | Series | What it does |
|---|---|---|---|
| Sunday | `service-desk` | Customer Service Playbook | teaches one service skill, metric or OKR/KPI practice with an Omani worked example |
| Monday | `pulse` | Oman Service Pulse | news-driven: scans MTCIT/TRA/MoL/commerce/ONA announcements from the last week; evergreen fallback if quiet |
| Tuesday | `ai-explained` | AI, Explained Simply | plain-language conversational AI explainers; Arabic and Omani Arabic angles carry the flag |
| Wednesday | `rights-and-privacy` | Your Data, Your Rights | Personal Data Protection Law, consent, consumer rights, for both customers and businesses |
| Thursday | `owner-playbook` | Business Owner Playbook | a real service pain (after-hours calls, missed insights, seasonal spikes) with worked OMR costs and honest fixes |
| Friday | `weekend-read` | The Weekend Read | shareable human stories of work and service life in Oman, built on composite characters |
| Saturday | `seasonal` | Season Ready | prepares businesses for what Oman's calendar brings next (Ramadan, Khareef, National Day, Muscat Nights, tourists, heat) |

Bank entries rotate: unused entries first (seasonal `bestWindow` entries only
inside their window), then the bank wraps with an explicit "take a different
angle" instruction. `datedOverrides` pin event-timed pieces to exact dates and
always win over the lane.

Missed days back-fill for up to 14 days (never the news lane, never dated
overrides) with a research cutoff so a catch-up article cannot cite anything
published after its date. Two failed attempts quarantine a date in
`scripts/.article-generation-state.json` (gitignored).

## The two-site system (with chatbot.om)

The sister machine in `~/Workspace/chatbot-OM` publishes daily at
chatbot.om/blog/ for the opposite reader: small message-first teams. Three
mechanisms keep the two blogs from duplicating and let them cross-sell:

1. **Different readers by design**: this site's examples are sized for
   operator desks and IVR-scale organisations; the sister's for two-to-ten
   person businesses living on WhatsApp.
2. **Cross-site dedupe**: each generator reads the other's
   `content/articles/` from disk, injects the sister's recent titles as
   do-not-duplicate territory, and runs its near-duplicate check across both
   stores. Schedules are staggered (this machine 10:35/20:35 IST, the sister
   11:50/21:50) so the later run always sees the earlier one's article.
3. **Cross-recommendations, honestly**: when an article here meets a small
   message-first business, it may recommend Chatbot.OM with one natural link
   (and the sister does the reverse for phone-shaped problems). At most one
   sister link per article, exempt from sources[], validated against the
   sister's real pages and articles at generation time. The rules come from
   chatbot.om/comparison/, the source of truth for the capability split.

## Who the articles are for

The buyer-side reader is someone who already runs customer service at scale:
an owner, operations manager or front office lead at a hotel, polyclinic
group, dealership, real estate firm, insurer, logistics operation or college,
with telephone operators, a service desk or an IVR line on the payroll today.
Worked examples and cost maths are sized for that reader; a one-person shop
never appears as the buyer in a pitch (AI customer care is a serious
operational investment, and concept-selling it to a corner cafe is off
strategy). The everyday customer is the second reader, especially on Fridays.

## Scheduled articles and what you see where

An article is live only on and after its `publishDate`, so a production build
never ships tomorrow's piece early. Local development does the opposite:
`npm run dev` shows every article in the store, including future-dated ones,
each marked with a lime `SCHEDULED` tag, so a freshly generated article never
looks like it vanished. Setting `CONTENT_AS_OF` opts back into strict
filtering at any date, which is what a build or a date-pinned check uses:

```bash
CONTENT_AS_OF=2026-08-16 npm run build   # build the site as it will look that day
```

## Editorial guardrails (enforced in code, not just prompt)

- Block JSON only: raw HTML anywhere in an article fails validation.
- No em or en dashes anywhere (prompt, auto-repair, validator, and the config
  files themselves are checked).
- Banned terms: "receptionist", "answering service", "the Kingdom". The brand
  is written exactly `CustomerCare.OM`.
- **Local register.** The site is read inside Oman, so writing that explains
  Oman to Omanis is rejected. Two rules are enforced in the validator:
  nationality is never an audience label ("Omani customers" fails; write
  "customers" or "callers", since inside Oman "Omani" means nationals, a
  minority of any customer base), and legal boilerplate everyone assumes is
  cut ("Muslim employees" fails; Ramadan's shorter hours are simply
  understood). Decree numbers may not appear inline outside the two
  regulated categories: name the rule plainly and let `sources[]` carry the
  citation.
- Every external link must appear in `sources[]` (self-healed, then enforced).
  Regulated categories (Rules & Updates, Privacy & Consumer Rights) need at
  least 2 sources including 1 `oman-official`.
- Internal links: at most 3, and every internal href must resolve to a real
  site path or an existing article. Own-site links must be relative paths
  (absolute customercare.om URLs are healed by the generator and rejected by
  the validator), own-site pages never appear in `sources[]`, and markdown
  link syntax inside text fails validation because it renders literally.
- Islamic dates are always "expected around X, subject to the official moon
  sighting announcement".
- Required structure: a lead, a worked example, a persona quote, a highlight
  pull-line, a "What this means for you" heading, an action callout, and 700
  to 1,200 words.
- Story arc: an article that names a problem must resolve it; the reader
  leaves with the way out, not just the feeling. The structure is a held
  question: the lead opens a loop, the body delays the payoff (with a small
  promise along the way) and the resolution lands in the final third, so
  "What this means for you" reads as the payoff. Stories resolve inside the
  story, through the character, never as a bolted-on pitch.
- Quotes are honest by construction: either `persona: true` (a labeled
  composite voice, rendered with a "composite voice" caption) or a real
  quotation with a verifiable `sourceUrl`. Nothing in between validates.
- Every article carries a `thumbnail`: a 400x225 SVG card image on one of 7
  deterministic dark themes, safety-validated (no scripts, handlers, external
  references or embedded content) and only ever rendered as a data: URI
  inside an <img>, never inline. It appears on the blog index, series pages
  and related-article cards, never on the article page itself.
- Near-duplicate guards: title/excerpt Jaccard at generation time plus a
  library-wide trigram similarity gate at validation time.

## Setup on a fresh machine

```bash
# 1. dependencies
nvm install 22 && npm install
npm install -g @anthropic-ai/claude-code

# 2. long-lived auth token (Keychain is not reachable from launchd)
claude setup-token
echo -n "sk-ant-oat01-YOUR_TOKEN" > ~/.claude/.oauth-token
chmod 600 ~/.claude/.oauth-token

# 3. test a run manually
npm run articles:dry-run             # shows today's task, no model call
bash scripts/run-article-gen-wrapper.sh   # full run incl. commit + push

# 4. schedule it
cp scripts/com.customercare.article-generator.plist.example \
   ~/Library/LaunchAgents/com.customercare.article-generator.plist
launchctl load ~/Library/LaunchAgents/com.customercare.article-generator.plist
tail -f scripts/cron.log
```

The job fires at 10:35 and 20:35 host time (IST; 09:05 and 19:05 in Muscat).
The morning run publishes for the Omani morning; the evening run is a retry
that no-ops when the success marker for the day exists. The marker is written
only when the runner exited 0, the content store has a commit dated today,
and nothing is left unpushed.

After editing the plist: `launchctl unload ...` then `launchctl load ...`.

### Token rotation (about once a year)

```bash
claude setup-token
vim ~/.claude/.oauth-token   # paste the new token
```

No reload needed; the token file is re-read on every run. If runs start
failing with "Not logged in" or "does not have access", the token expired.

## Local commands

```bash
npm run articles:validate            # validate every article + editorial config
npm run articles:validate:links      # also HEAD-check every cited source URL
npm run articles:dry-run             # show today's selected task, no model call
npm run articles:dry-run -- --date 2026-11-14 --show-prompt
npm run articles:generate            # generate today's article (writes JSON only)
npm run articles:generate -- --lane weekend-read   # force a lane
npm run articles:generate -- --task khareef-line-ready  # force a bank entry
npm run articles:generate -- --no-catchup
CUSTOMERCARE_GENERATION_DATE=2026-08-20 npm run articles:generate
CUSTOMERCARE_CLAUDE_MODEL=claude-sonnet-5 npm run articles:generate
```

Note: `npm run articles:generate` needs `CLAUDE_CODE_OAUTH_TOKEN` in the
environment when run outside the wrapper (the wrapper exports it from
`~/.claude/.oauth-token`).

## Troubleshooting

- **Nothing published for days**: the wrapper logs `ALERT:` lines and fires a
  macOS notification once the store is 3+ days stale. Check
  `scripts/cron.log`; the usual causes are an expired token, a sleeping
  machine, or a CLI upgrade changing flags (test with
  `npm run articles:dry-run` then a manual wrapper run).
- **A run failed validation**: the rejected draft with its error list is kept
  at `scripts/.rejected-<taskId>.json` for post-mortem.
- **A catch-up date keeps failing**: after 2 attempts it is quarantined in
  `scripts/.article-generation-state.json`; delete the entry to retry.
- **Editing an article by hand**: edit the JSON, bump `modifiedDate`, run
  `npm run articles:validate`, commit. Never edit `slug` (the filename and
  URL) after publication.

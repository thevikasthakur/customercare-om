import type { LearnArticle } from "./types";

export const learnArticles: LearnArticle[] = [
  {
    slug: "how-much-to-pay-for-voice-ai-agent",
    title: "Comparing Voice AI Pricing Models for Omani Enterprises",
    date: "May 12, 2026",
    excerpt: "Voice AI pricing ranges from a few baisa per minute to five-figure enterprise contracts. Here is how each pricing model behaves against real call traffic, what drives the cost underneath, and how to budget for it in Oman.",
    sections: [
      {
        p: [
          "Ask five voice AI vendors for a price and you will get five different structures: per minute, per call, per resolution, per agent seat, or a flat platform fee with usage on top. None of these is inherently better, but each one rewards a different usage pattern, and choosing the wrong structure for your call profile can double your effective cost without anything going wrong.",
          "This guide breaks down the pricing models you will encounter, the hidden costs that rarely appear on the pricing page, and a practical framework for working out what a voice agent should cost for a business operating in Oman and the wider Gulf.",
        ],
      },
      {
        h: "The four pricing models you will encounter",
        p: [
          "Per-minute pricing is the most common. You pay for connected talk time, typically metered by the second after the first minute. It is transparent and easy to compare, but it quietly penalises long, thorough conversations, the very calls where automation delivers the most value.",
          "Per-call pricing charges a flat rate per conversation regardless of length. It suits businesses with predictable call shapes, such as appointment booking, but can be poor value if a large share of your calls are short wrong-number or quick-question interactions.",
          "Per-resolution or outcome pricing charges only when the AI completes a defined goal, a booking made, a payment collected, a query answered without escalation. It aligns vendor and buyer incentives well, but definitions of resolution vary enormously, so read that clause carefully.",
          "Platform-plus-usage combines a monthly subscription covering the builder, analytics, and integrations with a metered rate for actual call traffic. Most serious deployments end up here, because the platform fee funds the tooling you use to improve the agent over time.",
        ],
        bullets: [
          "Per minute: simple to compare, penalises longer helpful calls",
          "Per call: predictable, but poor value with many short calls",
          "Per resolution: incentive-aligned, but scrutinise the definition",
          "Platform plus usage: the standard for ongoing deployments",
        ],
      },
      {
        h: "What actually drives the cost underneath",
        p: [
          "Under every pricing model sit the same cost drivers: speech recognition and synthesis compute, the language model powering the conversation, telephony charges to carry the call, and the engineering that glues them together. Latency is a genuine cost factor, achieving sub-second responses requires better infrastructure than a laggy pipeline, and vendors who invest there price accordingly.",
          "Language coverage matters too. An agent that only handles English draws on commodity components; one that converses naturally in Omani Arabic and switches to Hindi or Malayalam mid-conversation reflects specialised model work, and that capability is part of what you are paying for.",
          "Data residency is the third quiet driver. Hosting inside Oman to satisfy the Personal Data Protection Law costs more to operate than pooling everything in a US or EU region, but it converts a compliance headache into a checkbox, value that never shows up in a per-minute comparison.",
        ],
      },
      {
        h: "The hidden costs that never appear on the pricing page",
        p: [
          "Setup and integration effort is the first. A quoted rate means little if you need three months of consulting to connect the agent to your CRM. Ask how much of the setup you can do yourself with a visual builder, and how much requires the vendor's professional services team.",
          "Telephony is the second. Some vendors bundle carrier charges; others pass them through. For an Oman deployment, confirm whether local number rental and inbound minutes on Omani networks are included, and at what rate outbound calls are billed.",
          "The third is the cost of change. If every script tweak is a paid change request, your total cost of ownership will dwarf the headline rate. Platforms that let your own operations team edit workflows shift that recurring cost to near zero.",
        ],
      },
      {
        h: "Benchmarking against the human alternative",
        p: [
          "The honest comparison is not AI versus free, it is AI versus the fully loaded cost of handling the same call with people. For a Gulf contact centre, once you include salary, allowances, workspace, management, training, and attrition, a handled call typically costs many times what any per-minute AI rate works out to.",
          "But run the comparison on outcomes, not just cost per call. If the AI contains seventy percent of calls and hands the rest to humans with full context, your humans handle fewer, harder, higher-value conversations. Model the blended cost of the whole operation, before and after, rather than comparing a robot minute to a human minute.",
        ],
      },
      {
        h: "A realistic budgeting framework",
        p: [
          "Start with your monthly call volume and average call length, your phone system or telecom bill has both. Multiply into total minutes, then price that volume under each vendor's model. This single exercise usually eliminates half the shortlist, because a structure that looked cheap collapses under your actual traffic shape.",
          "Then add a pilot budget. A sensible pilot covers one to two call types for one to three months, with clear success metrics agreed in advance. Expect to spend modestly during the pilot and treat it as the price of certainty: it tells you your real containment rate, which is the number that determines whether the economics work at scale.",
        ],
        bullets: [
          "Compute your real monthly minutes before comparing any quotes",
          "Price your actual traffic under every model, not the vendor's example",
          "Budget a defined pilot with success metrics agreed up front",
          "Include integration, telephony, and change costs in total ownership",
        ],
      },
      {
        h: "Where this leaves your budget",
        p: [
          "There is no universal right price for a voice AI agent, but there is a right price for your call volume, your languages, and your compliance requirements. A business handling a few thousand calls a month in Muscat should expect a modest platform fee plus usage that compares very favourably with a single agent's salary, while a bank-scale deployment is a negotiated enterprise contract with residency, audit, and uptime commitments attached.",
          "Whatever the number, insist on pricing you can independently verify from the analytics dashboard, a definition of billable time you understand, and the freedom to change your own workflows without a change-request invoice. Those three conditions do more for your total cost than any per-minute discount.",
        ],
      },
    ],
  },
  {
    slug: "how-to-implement-voice-ai",
    title: "A Phased Rollout Plan for Voice AI in Oman",
    date: "June 16, 2026",
    excerpt: "A practical, phase-by-phase guide to deploying a voice AI agent, from picking the first call type to going live and scaling, written for businesses operating in Oman.",
    sections: [
      {
        p: [
          "Most voice AI projects do not fail on technology. They fail on scope: a team tries to automate every call on day one, the agent disappoints on the hardest ten percent, and the whole initiative loses credibility. The successful pattern is almost boringly consistent, start with one high-volume, well-understood call type, prove it, then expand.",
          "This guide walks through that pattern step by step, with the specifics that matter for an Omani deployment: multilingual callers, local telephony, Ramadan schedules, and the Personal Data Protection Law.",
        ],
      },
      {
        h: "Phase one: choose the right first call type",
        p: [
          "Audit a week of real calls before deciding anything. Most businesses discover that three to five call reasons account for the large majority of volume, appointment booking, order status, opening hours and directions, balance enquiries, delivery rescheduling. These repetitive, rule-bound calls are your candidates.",
          "Pick the candidate that is high-volume, low-emotion, and fully resolvable from information you can write down. Appointment booking is a classic first deployment: the conversation has a clear goal, success is unambiguous, and the payoff, fewer missed calls, fewer no-shows, is visible within weeks.",
        ],
        bullets: [
          "Audit a full week of calls and categorise every reason",
          "Choose high-volume, low-emotion, rule-bound conversations first",
          "Avoid complaints and negotiations as a first deployment",
          "Define what a successful automated call looks like in one sentence",
        ],
      },
      {
        h: "Phase two: prepare your knowledge and your rules",
        p: [
          "A voice agent is only as good as the source material behind it. Gather the documents that answer your chosen call type, price lists, policies, schedules, FAQs, and update them before upload, because the agent will faithfully repeat whatever they say, including the price list from last year.",
          "For Omani businesses this is the moment to fix the bilingual gap. If your tariff sheet exists only in English but forty percent of callers speak Arabic, either translate the document or confirm your platform retrieves across languages. Decide your escalation rules now too: which topics, keywords, and caller types must always reach a human, and during which hours humans are actually available.",
        ],
      },
      {
        h: "Phase three: build and test the workflow",
        p: [
          "With a visual workflow builder, the first draft of a call flow is an afternoon's work, not a development sprint. Structure the flow around the natural shape of the conversation: greeting, identification if needed, open conversation toward the goal, confirmation, and follow-up by SMS or email.",
          "Test with real people before real customers. Have staff call the agent in every language you support and deliberately go off-script, mumble, interrupt, change their mind halfway, ask something irrelevant. Log every failure and fix the flow, the knowledge, or the escalation rule it exposes. In Oman context, test etiquette explicitly: does the agent greet properly, handle honourifics, and cope with a caller who opens with extended pleasantries?",
        ],
        bullets: [
          "Draft the flow around the conversation's natural shape",
          "Test in every supported language with deliberately awkward callers",
          "Verify greeting etiquette and pacing, not just information accuracy",
          "Fix failures in the flow or knowledge base, then retest",
        ],
      },
      {
        h: "Phase four: go live gradually",
        p: [
          "Before this phase, make sure your SIP trunk from Omantel or Ooredoo is provisioned, since procurement is usually the longest single step and is worth starting on day one of the project. Do not cut over your main number on day one. Route a controlled slice of traffic first, after-hours calls, a specific campaign number, or overflow when all humans are busy. After-hours is a particularly forgiving start: every call the agent handles at 11pm is a call that previously went to voicemail, so the baseline is zero and improvement is guaranteed.",
          "Watch the live monitoring view during the first days and read transcripts daily during the first weeks. Early transcripts are gold: they show you the questions you never anticipated and the phrasings your callers actually use, which rarely match what your team wrote in the FAQ.",
        ],
      },
      {
        h: "Phase five: measure, tune, and expand",
        p: [
          "Track a small set of numbers from the first day: containment rate, escalation reasons, caller sentiment, average handling time, and outcome completion. Review them weekly, drill into the worst calls, and make one or two targeted changes at a time so you can see what moved the numbers.",
          "Once the first call type holds a containment rate you are happy with for a full month, expand to the next one from your original audit. Each subsequent deployment is faster because the knowledge base, integrations, escalation paths, and team habits already exist.",
        ],
      },
      {
        h: "Compliance and change management from day one",
        p: [
          "Under Oman's Personal Data Protection Law, recorded calls containing personal data need a lawful basis, informed callers, defined retention, and controlled access. Handle this at design time: an announcement in the greeting, retention periods configured in the platform, role-based access to recordings, and, most simply, a platform hosted inside Oman so residency questions answer themselves.",
          "Bring your team along deliberately. Position the agent as the tool that removes the repetitive eighty percent of calls, show staff the transcripts and handover summaries they will receive, and involve your best phone people in reviewing the agent's conversations. The teams that adopt fastest are the ones whose humans helped train their new colleague.",
        ],
        bullets: [
          "Announce recording and purpose in the greeting",
          "Configure retention and role-based access before launch",
          "Prefer in-country hosting to simplify Personal Data Protection Law residency",
          "Involve frontline staff in reviewing and improving the agent",
        ],
      },
      {
        h: "A realistic timeline",
        p: [
          "For a mid-sized Omani business with a cooperative IT contact, the pattern above typically runs: one week for the call audit and knowledge preparation, one to two weeks to build and test the first workflow, two to four weeks of gradual live traffic, and a first expansion decision around week eight. Businesses that skip the audit or the staged rollout do not go faster, they just discover the same lessons in front of customers instead of in testing.",
        ],
      },
    ],
  },
  {
    slug: "how-to-measure-voice-agent-roi",
    title: "Modelling Voice AI ROI for an Omani Enterprise",
    date: "July 21, 2026",
    excerpt: "Containment rate alone does not prove value. This guide sets out the full ROI model for a voice AI agent, cost savings, revenue recovered, and the metrics that actually belong in the board pack.",
    sections: [
      {
        p: [
          "Voice AI vendors love to quote containment rate, the share of calls the agent finishes without a human. It is a useful number and an incomplete one. An agent can contain ninety percent of calls while annoying every caller into never phoning again, or contain sixty percent while recovering revenue your business was silently losing to unanswered phones.",
          "Measuring real return means modelling three streams, cost avoided, revenue recovered, and quality effects, against the full cost of running the agent. This guide builds that model piece by piece, with the assumptions an Omani or Gulf business should use.",
        ],
      },
      {
        h: "Start with the baseline you are replacing",
        p: [
          "ROI is a comparison, so document the before-state honestly. How many calls arrive per month, and how many go unanswered, after hours, on Fridays, during Ramadan schedule changes, during lunchtime peaks? What does a handled call cost when you include salaries, allowances, workspace, supervision, training, and attrition, not just the hourly wage?",
          "Most businesses have never measured missed calls, and it is usually the most uncomfortable number in the exercise. Your telecom provider's reports or your PBX logs will show calls offered versus calls answered. In service businesses across Oman, unanswered and after-hours calls routinely represent a fifth or more of total demand, demand you are already paying to generate through marketing, then failing to answer.",
        ],
        bullets: [
          "Measure calls offered versus calls answered, including after hours",
          "Compute the fully loaded cost of a human-handled call",
          "Record baseline no-show, callback, and abandonment rates",
          "Capture baseline customer effort: how often callers repeat themselves",
        ],
      },
      {
        h: "Stream one: cost avoided",
        p: [
          "The most direct return is calls the agent handles that a human no longer must. The calculation is simple: contained calls per month multiplied by your fully loaded cost per human call, minus the usage cost of those AI-handled minutes. Be conservative, count only calls genuinely resolved, not calls that ended in a frustrated hang-up. Your analytics dashboard's outcome and sentiment data lets you separate the two.",
          "Include the second-order savings too: fewer repeated calls because follow-up SMS and email confirmations reduce misunderstandings, and shorter human calls because warm transfers arrive with context instead of starting from zero. Handover context alone typically saves several minutes on every escalated call, and those minutes are your most expensive ones.",
        ],
      },
      {
        h: "Stream two: revenue recovered",
        p: [
          "Every previously missed call that the agent now answers is potential revenue. Estimate it with a simple chain: recovered calls per month, multiplied by the share that were commercial in intent, multiplied by your conversion rate, multiplied by average transaction value. Even with cautious assumptions, this stream often exceeds the cost-savings stream, especially for clinics, workshops, real estate, and hospitality businesses where a missed call is a booking placed with a competitor.",
          "Add reduced no-shows where relevant. If automated reminders lift attendance by even a few percentage points, multiply those recovered appointments by their average value. For appointment-driven Omani businesses this is frequently the single largest line in the model.",
        ],
        bullets: [
          "Recovered calls × commercial intent share × conversion × transaction value",
          "Recovered no-shows × average appointment value",
          "Value of serving callers in languages you previously could not",
          "Outbound campaigns now feasible that were too costly with staff",
        ],
      },
      {
        h: "Stream three: quality and risk effects",
        p: [
          "Some returns resist a tidy rial figure but belong in the assessment. Consistency is one: the agent quotes the same policy on every call, eliminating the cost of staff misinformation. Speed is another: sub-second answers around the clock change how customers perceive the business. Use proxy metrics, caller sentiment trend, first-call resolution, complaint volume, repeat-caller rate, and track them from day one so the trend is visible even where the rial value is argued.",
          "Risk reduction counts too. Complete recordings, transcripts, and audit trails reduce dispute costs and make Personal Data Protection Law compliance demonstrable rather than aspirational. If your sector regulator can ask for call records, the cost of not having them is the real comparison.",
        ],
      },
      {
        h: "Count the full cost side honestly",
        p: [
          "Against the three return streams, count everything the agent costs: platform subscription, usage charges, telephony, the internal hours spent building and tuning workflows, and any integration work. Include the ongoing tuning time, a few hours a week in the early months, because a model that assumes zero maintenance will be quoted back at you later.",
          "Then express the result in the formats your leadership actually uses: monthly net benefit, payback period, and return on total spend over twelve months. For most deployments that start with a high-volume call type, payback measured in a few months is a realistic expectation, and anything claiming payback in days deserves suspicion.",
        ],
      },
      {
        h: "The metrics that belong in your monthly review",
        p: [
          "Keep the operating dashboard small enough that someone actually reads it. Containment rate with a quality filter, escalation reasons ranked, caller sentiment trend, calls recovered outside staffed hours, cost per resolved call blended across AI and humans, and the two or three revenue lines from your model. Review monthly, annotate changes you made, and re-run the full ROI model quarterly with actuals replacing assumptions.",
          "The discipline pays twice. It proves the value of the current deployment, and it tells you exactly which call type to automate next, because the model shows where the remaining human minutes and missed calls are concentrated. ROI measurement, done properly, is not a justification exercise. It is the roadmap.",
        ],
        bullets: [
          "Quality-filtered containment, not raw containment",
          "Blended cost per resolved call across AI and human channels",
          "After-hours recovered calls and their revenue value",
          "Sentiment and first-call-resolution trends month over month",
          "Quarterly re-run of the full model with actual figures",
        ],
      },
    ],
  },
];

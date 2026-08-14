#!/bin/bash
# Runner for the daily CustomerCare.OM article generator.
#
# Called by run-article-gen-wrapper.sh (which handles the once-per-day
# success marker). This script does the actual work: environment, auth,
# git reconciliation, generation, validation, commit and push.
#
# Claude CLI credentials live in the macOS Keychain, which background jobs
# cannot always reach, so auth comes from a long-lived token file instead:
#   claude setup-token
#   echo -n "sk-ant-oat01-..." > ~/.claude/.oauth-token && chmod 600 ~/.claude/.oauth-token
# The token is shared with the sibling generators (aiinoman, omanvision2040,
# inzint, amaal) and is re-read on every run, so rotation needs no reload.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ARTICLES_PATH="content/articles"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

cd "$REPO_DIR"

# launchd starts with a minimal environment: rebuild PATH and HOME.
export HOME="${HOME:-$(eval echo ~"$(whoami)")}"
export PATH="/usr/local/opt/node@22/bin:$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$HOME/.nvm/nvm.sh"
  nvm use --silent 22 >/dev/null 2>&1 || true
fi

if ! command -v node >/dev/null 2>&1; then
  log "ERROR: node not found on PATH"
  exit 1
fi
if ! command -v claude >/dev/null 2>&1; then
  log "ERROR: claude CLI not found on PATH"
  exit 1
fi

OAUTH_TOKEN_FILE="$HOME/.claude/.oauth-token"
if [ -f "$OAUTH_TOKEN_FILE" ]; then
  export CLAUDE_CODE_OAUTH_TOKEN="$(cat "$OAUTH_TOKEN_FILE")"
else
  log "ERROR: No OAuth token at $OAUTH_TOKEN_FILE. Run: claude setup-token"
  exit 1
fi

# ── git: reconcile before generating ────────────────────────────────────
STASHED=0
if ! git diff --quiet || ! git diff --cached --quiet; then
  log "Working tree dirty; stashing"
  git stash push --include-untracked -m "article-gen autostash" >/dev/null
  STASHED=1
fi
if ! git pull --rebase origin main; then
  log "WARNING: git pull --rebase failed; continuing with local state"
fi
if [ "$STASHED" -eq 1 ]; then
  git stash pop || log "WARNING: stash pop failed; resolve manually"
fi

# A commit from a previous run may still be unpushed; heal that first so
# the success marker never lies about what is live.
PENDING_PUSH_COUNT=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
if [ "$PENDING_PUSH_COUNT" -gt 0 ]; then
  log "Found $PENDING_PUSH_COUNT unpushed commit(s); retrying push before generating"
  if ! git push origin main; then
    log "ERROR: pending commits still cannot be pushed; aborting this run"
    exit 1
  fi
fi

# ── generate ────────────────────────────────────────────────────────────
log "Generating today's article..."
set +e
npm run articles:generate
GENERATOR_EXIT_CODE=$?
set -e
if [ "$GENERATOR_EXIT_CODE" -ne 0 ]; then
  log "Generator reported an incomplete run (exit $GENERATOR_EXIT_CODE). Committing any completed article before propagating the status."
fi

# ── validate, commit, push (only the content store) ─────────────────────
if [ -n "$(git status --porcelain -- "$ARTICLES_PATH")" ]; then
  if ! npm run articles:validate; then
    log "ERROR: validation failed. Not committing. Inspect $ARTICLES_PATH manually."
    exit 1
  fi
  git config user.name "thevikasthakur"
  git config user.email "vikasthakur910@gmail.com"
  git add -- "$ARTICLES_PATH"
  git commit -m "content: daily article for $(date +%Y-%m-%d)"
  if git push origin main; then
    log "Pushed. Netlify will rebuild and deploy."
  else
    log "WARNING: push failed; the commit stays local and the next run will retry the push."
  fi
else
  log "No new article files to commit."
fi

exit "$GENERATOR_EXIT_CODE"

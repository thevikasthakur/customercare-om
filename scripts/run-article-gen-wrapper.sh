#!/bin/bash
# Once-per-day wrapper for the article generator, fired by launchd at the
# scheduled times. The first firing does the work; later firings the same
# day are retries that no-op once a success marker exists.
#
# The marker is only written when all three held: the runner exited 0, the
# content store has a commit dated today, and nothing is left unpushed.
# Always exits 0 so launchd never applies backoff.
set -uo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TODAY=$(date +%Y-%m-%d)
SUCCESS_MARKER="/tmp/customercare-article-gen-success-${TODAY}"
LOG_FILE="$REPO_DIR/scripts/cron.log"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

# Keep the log from growing without bound (a sibling project's grew to 5 MB).
if [ -f "$LOG_FILE" ] && [ "$(wc -c < "$LOG_FILE")" -gt 1048576 ]; then
  tail -n 2000 "$LOG_FILE" > "$LOG_FILE.tmp" && mv "$LOG_FILE.tmp" "$LOG_FILE"
  log "Trimmed cron.log to its last 2000 lines"
fi

# Sweep markers older than a week.
find /tmp -maxdepth 1 -name "customercare-article-gen-success-*" -mtime +7 -delete 2>/dev/null || true

if [ -f "$SUCCESS_MARKER" ]; then
  log "Content already generated successfully today. Skipping."
  exit 0
fi

log "No success marker found. Running article generation..."
"$REPO_DIR/scripts/run-article-gen.sh"
MAIN_EXIT_CODE=$?

cd "$REPO_DIR"
LAST_COMMIT_DATE=$(git log -1 --format=%cd --date=short -- content/articles 2>/dev/null || echo "")
PENDING_PUSH_COUNT=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")

if [ "$MAIN_EXIT_CODE" -eq 0 ] && [ "$LAST_COMMIT_DATE" = "$TODAY" ] && [ "$PENDING_PUSH_COUNT" -eq 0 ]; then
  touch "$SUCCESS_MARKER"
  log "Article generated, committed and pushed. Marker written."
else
  log "Run incomplete (exit $MAIN_EXIT_CODE, last content commit: ${LAST_COMMIT_DATE:-none}, unpushed: $PENDING_PUSH_COUNT). Retry will run at the next scheduled time."
fi

# Loud staleness alert: if nothing has published for days, the pipeline is
# silently dead (expired token, broken CLI flag, sleeping machine). A quiet
# log line is how a sibling project stayed dead for 12 days.
if [ -n "$LAST_COMMIT_DATE" ]; then
  STALE_DAYS=$(( ( $(date +%s) - $(date -j -f "%Y-%m-%d" "$LAST_COMMIT_DATE" +%s 2>/dev/null || date +%s) ) / 86400 ))
  if [ "$STALE_DAYS" -ge 3 ]; then
    log "ALERT: no article commit for $STALE_DAYS days. The pipeline needs attention."
    osascript -e "display notification \"No article published for $STALE_DAYS days. Check scripts/cron.log.\" with title \"CustomerCare.OM blog pipeline\"" 2>/dev/null || true
  fi
fi

exit 0

#!/usr/bin/env bash
# Drift check for docs/failures/jsx-class-attribute-drift.md
#
# Rule: this repo uses `class=` in JSX, not `className=`.
#
# Scope: only checks files that differ from the given base ref (default:
# origin/master), so this does NOT fail on the 32 pre-existing occurrences
# repo-wide -- only on className= introduced or left in lines you're already
# touching. Run with no args to check uncommitted + committed changes vs
# origin/master; pass a different base ref as $1 if needed.
set -euo pipefail

BASE_REF="${1:-origin/master}"

CHANGED_JS_FILES=$(git diff --name-only "$BASE_REF"...HEAD -- 'src/*.js' 2>/dev/null || true)
CHANGED_JS_FILES="$CHANGED_JS_FILES $(git diff --name-only -- 'src/*.js' 2>/dev/null || true)"
CHANGED_JS_FILES=$(echo "$CHANGED_JS_FILES" | tr ' ' '\n' | sort -u | grep -v '^$' || true)

if [ -z "$CHANGED_JS_FILES" ]; then
  echo "check_jsx_class_attr: no changed src/*.js files vs $BASE_REF, nothing to check."
  exit 0
fi

FAILED=0
for f in $CHANGED_JS_FILES; do
  [ -f "$f" ] || continue
  MATCHES=$(grep -n "className=" "$f" || true)
  if [ -n "$MATCHES" ]; then
    echo "FAIL: $f uses className= (should be class=) in changed file:"
    echo "$MATCHES" | sed 's/^/  /'
    FAILED=1
  fi
done

if [ "$FAILED" -ne 0 ]; then
  echo
  echo "See docs/failures/jsx-class-attribute-drift.md for context."
  exit 1
fi

echo "check_jsx_class_attr: OK, no className= in changed files."

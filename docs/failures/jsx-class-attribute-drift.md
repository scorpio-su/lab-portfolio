# `className=` used despite documented `class=` convention

## Summary

Repo convention (this repo's own contributor notes, and now `AGENTS.md`)
states JSX should use `class=` rather than the standard React `className=`,
to stay consistent with the majority of existing code. As of this writing the
convention is already violated 32 times across 4 files.

## Root Cause

The convention was likely established early (matching whichever file was
written first) but never enforced, so files added or edited later
(`Project.js` in particular — entirely `className=`) drifted to the React
default instead.

## Prevention

- `scripts/check_jsx_class_attr.sh` scans `src/**/*.js` for `className=` and
  fails (non-zero exit) if any is found outside an explicit allowlist.
- Because fixing all 32 existing occurrences in one unrelated change would be
  a large, risky diff, the current rule is: **fix `className=` to `class=`
  only in lines you are already touching for another reason** — don't do a
  repo-wide sweep as a side effect of an unrelated task, and don't leave the
  drift check failing for a task that didn't touch those files (the check
  script scopes to changed files, not the whole repo, for this reason — see
  script comments).

## Evidence

- `grep -rn "className=" src/*.js | wc -l` → 32
- `grep -rl "className=" src/*.js` → `src/App.js`, `src/Member.js`,
  `src/Project.js`, `src/Sidebar.js`

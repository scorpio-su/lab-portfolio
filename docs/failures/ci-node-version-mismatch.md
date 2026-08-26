# CI pins an old Node version relative to react-scripts@5

## Summary

`.github/workflows/deploy.yaml` builds with a Node matrix of `[12.x]`.
`react-scripts@5` (used here) officially requires Node 14+. Local development
and this harness-adoption session both ran cleanly against Node 22, so the
mismatch has not caused an observed failure yet, but a future dependency bump
could break CI silently on Node 12 while working locally.

## Root Cause

The workflow was likely scaffolded early in the project (Node 12 was current
then) and never revisited when `react-scripts` was upgraded to a version with
a higher minimum.

## Prevention

- When next touching `.github/workflows/deploy.yaml`, bump the Node matrix to
  a currently-supported LTS (18.x or 20.x) rather than leaving 12.x.
- No automated drift check added for this (CI version pins are a manual
  editorial decision, not something worth scripting) — treat this note as the
  manual review trigger: if a change to `.github/workflows/deploy.yaml` is in
  scope, check the Node version at the same time.

## Evidence

- `.github/workflows/deploy.yaml` → `strategy.matrix.node-version: [12.x]`
- `package.json` → `"react-scripts": "^5.0.1"`
- Local run in this session: Node v22.22.2, `npm install` and `npm test`
  completed without Node-version-related errors.

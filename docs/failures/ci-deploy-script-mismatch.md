# CI deploy job calls a non-existent npm script

## Summary

`.github/workflows/deploy.yaml`'s `deploy` job runs `npm run deploy`. No such
script exists in `package.json` — the actual deploy script is named
`desploy` (`"desploy": "gh-pages -d build"`). If the `deploy` job ever runs as
currently written, it will fail with `npm error Missing script: "deploy"`.

## Root Cause

`package.json`'s deploy script was named `desploy` (likely a typo introduced
early in the project and then kept for compatibility / muscle memory), but the
GitHub Actions workflow was written against the "correct" spelling and never
verified against the actual `package.json`.

## Prevention

- Do not rename `desploy` back to `deploy` casually — check first whether any
  other docs, scripts, or muscle-memory commands depend on the current name
  before renaming.
- Preferred fix: update `.github/workflows/deploy.yaml`'s deploy step to run
  `npm run desploy` instead of `npm run deploy`.
- Drift check: `scripts/check_deploy_script_name.sh` (add if/when the workflow
  is touched again) should assert that every `npm run <script>` invocation in
  `.github/workflows/*.yaml` matches a key in `package.json`'s `scripts`.

## Evidence

- `package.json` → `"scripts": { ..., "desploy": "gh-pages -d build" }`
  (no `"deploy"` key present)
- `.github/workflows/deploy.yaml` → `deploy` job, step `Deploy`:
  `run: | ... npm run deploy`

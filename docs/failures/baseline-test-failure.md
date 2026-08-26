# `npm test` fails on a clean checkout (pre-existing, not agent-caused)

## Summary

Running `CI=true npm test -- --watchAll=false` on a fresh clone (no code
changes) fails: 1 suite, 1 test, 1 failure. This is a pre-existing baseline
failure — any agent starting work here should confirm this exact failure
exists before making changes, so it isn't mistaken for a regression they
introduced.

## Root Cause

`src/App.test.js` still contains the original Create React App boilerplate
test:

```js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

`App.js` was rewritten to render the router (`Header` + `Routes` + `Footer`)
and no longer contains a "learn react" link anywhere, so `getByText` throws
`TestingLibraryElementError: Unable to find an element with the text: /learn
react/i`.

## Prevention

- Before starting any task, run `npm test -- --watchAll=false` and confirm the
  failure matches this one exactly (1 suite / 1 test, `App.test.js`,
  "learn react"). If the failure differs, treat it as a real regression to
  investigate, not this known issue.
- When a task touches `App.js` or routing, replace `App.test.js` with a test
  that asserts something real (e.g. that the `Header` nav renders, or that
  the `/member` route renders `Member`), rather than leaving the stale
  assertion in place indefinitely.
- Do not "fix" this by reverting `App.js` to restore the old CRA boilerplate.

## Evidence

- Command: `CI=true npm test -- --watchAll=false`
- Result: `Test Suites: 1 failed, 1 total` / `Tests: 1 failed, 1 total`
- File: `src/App.test.js`

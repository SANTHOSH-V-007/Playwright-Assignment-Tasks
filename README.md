# Playwright Assignment Tasks

A collection of Playwright end-to-end test assignments and example tasks. This repository contains automated UI tests, helpers, and example page objects designed to demonstrate Playwright test patterns and best practices.

- Status: Draft / Example collection
- Tech: Playwright, Node.js, (TypeScript / JavaScript)
- Author: SANTHOSH-V-007

Table of contents
- [Overview](#overview)
- [Getting started](#getting-started)
- [Install dependencies](#install-dependencies)
- [Running tests](#running-tests)
- [Project structure](#project-structure)
- [Writing tests](#writing-tests)
- [Debugging and troubleshooting](#debugging-and-troubleshooting)
- [CI](#ci)
- [Contributing](#contributing)
- [License](#license)

## Overview
This repository holds end-to-end tests and assignment examples built with Playwright. Each assignment demonstrates a core testing concept (navigation, forms, fixtures, page objects, assertions, network stubbing, etc.). Use these as learning examples or as a starting point for your own Playwright test suites.

## Getting started
Prerequisites:
- Node.js (14+ recommended)
- npm or pnpm/yarn
- A terminal

Clone the repository:
```bash
git clone https://github.com/SANTHOSH-V-007/Playwright-Assignment-Tasks.git
cd Playwright-Assignment-Tasks
```

## Install dependencies
Install Node dependencies and Playwright browsers:
```bash
npm install
# or
# pnpm install
# yarn

npx playwright install
```

If the project uses TypeScript, you may want to install types and compile:
```bash
npm run build   # if there is a build step
```

## Running tests
Run the full test suite:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

Run with a headed browser (visible):
```bash
npx playwright test --headed
```

Open interactive debugging mode:
```bash
npx playwright test --debug
```

Generate and open the HTML report:
```bash
npx playwright show-report
```

If package.json defines scripts, you can use:
```bash
npm test
# or
npm run test:debug
```

## Project structure
(Adjust paths below to match this repository)

- package.json              - project scripts and dependencies
- playwright.config.*       - Playwright configuration (browsers, timeouts, projects)
- /tests                    - Playwright test files (e.g. *.spec.ts / *.spec.js)
- /pages                    - Page objects and UI helpers
- /fixtures                 - Test fixtures and data
- /helpers                  - Reusable utilities (selectors, API helpers)
- /reports                  - Generated test reports

## Writing tests
A typical Playwright test (TypeScript) looks like:
```ts
import { test, expect } from '@playwright/test';

test('example: homepage has title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

Best practices:
- Use page objects for repeated UI interactions.
- Use fixtures to share setup/teardown logic.
- Keep tests deterministic and isolate network dependencies (use request interception / mocking).
- Give tests meaningful names and keep one assertion focus per test where practical.

## Debugging and troubleshooting
- Add `--headed` to see the browser run.
- Use `--debug` to pause on failure and open Playwright Inspector.
- Inspect trace files:
  - Enable tracing in tests or config: `await page.tracing.start({ screenshots: true, snapshots: true })`
  - Save and open traces to diagnose flakiness.

Common commands:
```bash
npx playwright test --retries=2
npx playwright test --project=chromium
npx playwright show-trace trace.zip
```

## Continuous Integration (example)
For GitHub Actions a minimal job:
```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test --reporter=dot
      - run: npx playwright show-report || true
```

Adjust the CI to your repo (matrix browsers, environment variables, artifacts).

## Contributing
- Open issues to request features or report flaky tests.
- Add new assignment folders under `/tests` or update README for new examples.
- Keep tests small, deterministic, and well documented.

If you'd like me to draft a CONTRIBUTING.md or add templates for assignments, I can generate those.

## License
This repository is provided under the MIT License. See the LICENSE file for details.

## Contact
For questions and contributions: @SANTHOSH-V-007 (GitHub)

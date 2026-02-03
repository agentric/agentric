# Contributing to Agentric

Thank you for considering contributing to Agentric. We welcome clear, focused contributions that align with our non-custodial, verification-first design.

## How to contribute

1. **Open an issue** — Describe the change or bug; we use issues to track work and avoid duplicate effort.

2. **Fork and branch** — Fork the repository and create a branch from `main`:
   - Use a short, descriptive name: `fix/sidebar-nav`, `docs/readme-roadmap`, `feat/execution-filters`.
   - Keep branches focused on a single change where possible.

3. **Make your changes** — Follow the code style and conventions below. Ensure the project builds and lints cleanly.

4. **Open a pull request** — Target the `main` branch. In the PR description:
   - Summarize what changed and why.
   - Reference any related issues.
   - Confirm you have not introduced new dependencies or backend logic unless previously agreed.

5. **Review** — Maintainers will review when they can. We may ask for small edits; we aim to keep the process straightforward.

## Code style

- **TypeScript** — Strict mode; prefer explicit types for public APIs and props.
- **Formatting** — Prettier (see `.prettierrc`). Run `npx prettier --write .` before committing.
- **Linting** — ESLint with Next.js config. Run `npm run lint` and fix any reported issues.
- **UI** — Flat, dark control-plane aesthetic. Tables over cards; no hype copy or PnL/trading focus. Read-only feel unless the feature explicitly requires interaction.

## Expectations

- **No backend in this repo** — The control plane is mock-data only for now. Do not add real API calls, auth, or database logic without prior discussion.
- **No git/remote automation** — Do not add scripts that init git, push, or configure remotes.
- **Tone** — Calm, infra-grade. No marketing language in code or UI copy.

## Questions

If something is unclear, open an issue with the "question" label. We will respond as we can.

Again, thank you for contributing.

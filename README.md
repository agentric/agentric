# Agentric

**Agentric** is an open-source, developer-first framework and control plane for secure, non-custodial execution of on-chain agents.

This repository is the **open-source control plane** (landing page and dashboard) for Agentric. It provides a public-facing entry point and an operational view over agent execution, verification, and configuration—without custody of user funds or private keys.

---

## Overview

Agentric enables builders to deploy and operate on-chain agents with:

- **Non-custodial design** — Agents execute against user-controlled wallets and state; the control plane never holds keys or funds.
- **Verification-first** — Execution paths, policies, and outcomes are verifiable on-chain and auditable from the dashboard.
- **Infrastructure-grade** — Built for operators who need clarity, audit trails, and control over agent lifecycle and risk.

The dashboard in this repo is a read-only operational view. It surfaces agent status, execution history, liquidity and routing configuration, and verification state. Backend and chain integration are out of scope for this initial release; the UI is driven by mock data.

---

## Philosophy

- **No custody.** The system coordinates and observes; it does not hold or move user assets.
- **Observability over hype.** The dashboard focuses on status, executions, and verification—not PnL or trading narrative.
- **Tables over cards.** Dense, scannable data for operators.
- **Calm, infra tone.** Serious tooling for serious use cases.

---

## Dashboard

The **Agentric Control Plane** (under `/dashboard`) includes:

- **Overview** — Status tiles, recent executions table, system notes.
- **Agents** — Registered agents and their configuration.
- **Executions** — Execution history and timeline.
- **Liquidity** — Liquidity and routing configuration (read-only).
- **Verification** — Verification state and attestations.
- **Settings** — Placeholder for future configuration.

Run the app locally and open `/dashboard` to explore. All data is mock; no backend is required.

---

## Roadmap

- [ ] Public landing page and dashboard (this repo)
- [ ] Mock data and read-only control plane UI
- [ ] Agent registry and execution timeline views
- [ ] Verification and attestation UI
- [ ] Backend API and chain integration (separate effort)
- [ ] Production deployment and documentation

---

## Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000). Use the landing page “Enter” button or press Enter to open the dashboard at `/dashboard`.

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

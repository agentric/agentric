# Security

Agentric is designed with non-custodial execution and verification in mind. We take security seriously and welcome responsible disclosure of vulnerabilities.

## Reporting a vulnerability

If you believe you have found a security issue:

1. **Do not** open a public GitHub issue for the vulnerability.
2. **Email** a description of the issue, steps to reproduce, and any suggested fixes to:
   **security@agentric.dev**
3. Allow a reasonable time for a response (we aim to acknowledge within 72 hours).
4. We will work with you to understand and address the issue and will credit you in any advisory unless you prefer to remain anonymous.

## Scope

- This repository is the open-source control plane (landing page and dashboard) with **mock data only**. There is no production backend, key storage, or fund movement in this codebase.
- We still welcome reports related to:
  - Client-side security (XSS, injection, unsafe patterns that could affect future backend integration).
  - Dependency vulnerabilities that could impact users who run or build the project.
  - Design or documentation issues that could lead to misuse or misunderstanding of a future production system.

## Out of scope

- Issues that require physical access or social engineering.
- Issues in third-party services or dependencies that we do not maintain (please report those upstream where applicable).

Thank you for helping keep Agentric and its users safe.

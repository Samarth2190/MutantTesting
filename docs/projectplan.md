## Project Plan – Mutation Testing Framework (Node.js)

### 1. Introduction

This document outlines the plan for implementing mutation testing in a Node.js project using **Stryker**, and integrating it into a DevOps CI/CD pipeline. The project also includes a small **Express web app** so mutation testing results can be demonstrated in a realistic user-facing scenario (UI → API → business logic).

### 2. Phases and Timeline

1. **Requirements & Design**
   - Understand mutation testing concepts.
   - Choose Node.js stack (Express, Mocha, Chai, Supertest, Stryker).
   - Define repository structure and DevOps pipeline stages.
   - Decide quality thresholds (e.g., mutation score break threshold).

2. **Implementation**
   - Implement business logic modules (`calculator.js`, `tax.js`, `invoice.js`, `validator.js`).
   - Add a service layer (`services/pricingService.js`) to connect API input to core logic.
   - Build a small web UI (`src/public/`) and API routes (`routes/api.js`).
   - Write unit tests + API tests (Mocha + Chai + Supertest).
   - Configure Stryker (`stryker.conf.cjs`).

3. **DevOps Integration**
   - Add Jenkins pipeline (`pipelines/Jenkinsfile`).
   - Configure GitHub Actions (`pipelines/.github/workflows/cicd.yml`).
   - Create Docker image and `docker-compose.yml`.
   - Ensure reports are generated and stored as CI artifacts (`reports/mutation/`).

4. **Documentation & Demo**
   - Prepare design document, user guide, and API documentation (if any).
   - Record demo showcasing:
     - the webpage usage,
     - unit tests passing,
     - mutation testing report generation,
     - how improving tests increases mutation score.

5. **Review & Finalization**
   - Refine tests to reduce surviving mutants and “no coverage” mutants.
   - Finalize deliverables and self-assessment.


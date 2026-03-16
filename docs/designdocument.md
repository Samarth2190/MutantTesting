## Design Document – Mutation Testing Framework (Node.js)

### 1. Architecture Overview

The system consists of:

- **UI Layer**: Static webpage in `src/public/` (HTML/CSS/JS) that calls the API.
- **API Layer**: Express server in `src/main/` exposing endpoints under `/api`.
- **Service Layer**: `src/main/services/` converts API input into validated domain calculations.
- **Domain/Logic Layer**: Core functions in `src/main/` (`calculator`, `tax`, `invoice`, `validator`).
- **Testing Layer**: Unit + API tests in `tests/unit/` (Mocha + Chai + Supertest).
- **Mutation Testing Layer**: Stryker configuration in `stryker.conf.cjs` generating mutants and reports.
- **DevOps Layer**: Jenkins pipeline and GitHub Actions workflow plus Docker/Docker Compose configs.

### 2. Components

- `src/main/server.js`: Express app factory (`createApp`) and server starter (`startServer`).
- `src/main/start.js`: Runtime entrypoint used by `npm start`.
- `src/main/routes/api.js`: API router:
  - `GET /api/health`
  - `POST /api/calculate`
- `src/main/services/pricingService.js`: parsing + orchestration over domain logic.
- `src/main/calculator.js`: discount computation.
- `src/main/tax.js`: tax computation.
- `src/main/invoice.js`: invoice total (discount then tax).
- `src/main/validator.js`: shared validation utilities.
- `tests/unit/*.test.js`: unit tests and API tests.
- `stryker.conf.cjs`: Specifies mutation targets, test runner, reporters, and mutation score thresholds.
- `Jenkinsfile` and `cicd.yml`: Define CI pipeline stages including linting, unit tests, and mutation tests.

### 3. Data Flow

**Runtime (web app):**

1. User opens the webpage (`src/public/index.html`).
2. Frontend JS sends a request to `POST /api/calculate`.
3. API route calls `calculatePricing` in the service layer.
4. Service parses + validates inputs, then calls domain functions.
5. API returns JSON; UI renders the result.

**CI/CD (quality gate):**

1. Developer pushes code / opens PR.
2. Pipeline runs:
   - ESLint (`npm run lint`)
   - Unit/API tests (`npm test`)
   - Mutation tests (`npm run test:mutation`)
3. Stryker generates:
   - Console summary
   - HTML report under `reports/mutation/mutation.html`
4. CI uploads mutation report as an artifact (GitHub Actions).

### 4. Quality Gates

- Build fails if:
  - Unit tests fail, or
  - Stryker mutation score is below the configured `break` threshold in `stryker.conf.cjs`.

### 5. Mutation testing outputs (deliverable)

- **Primary metric**: mutation score (killed vs survived mutants)
- **Artifact**: `reports/mutation/mutation.html`
- **Usage in report**: surviving mutants identify weak or missing assertions (especially boundary cases and error handling paths).


## Mutation Testing Framework (Node.js) – DevOps Project

**Student Name**: _[Your Name]_  
**Registration No**: _[Your Registration Number]_  
**Course**: CSE3253 DevOps [PE6]  
**Semester**: VI (2025–2026)  
**Project Type**: CI/CD + Quality Engineering (Mutation Testing)  
**Difficulty**: Intermediate

### Project overview

This project demonstrates **mutation testing as a DevOps quality gate** for a Node.js application using **Stryker**.

To make the project more presentable, it also includes:

- A small **Express web app** with a clean webpage UI (`src/public/`)
- A JSON **API** used by the webpage:
  - `GET /api/health`
  - `POST /api/calculate`

Mutation testing goes beyond normal test coverage by introducing small changes (“mutants”) into the code and checking whether the automated tests detect them. The output is a **mutation score** and a detailed HTML report.

### Problem statement

High code coverage does not guarantee that tests catch real faults. This project integrates mutation testing into CI/CD so every change is validated by:

- Linting (static checks)
- Unit/API tests (Mocha + Chai + Supertest)
- Mutation tests (Stryker) with a score threshold

### Key features

- **Web UI + API demo**: a simple pricing calculator page to show real usage.
- **Mutation testing pipeline stage**: mutation testing runs automatically in CI.
- **HTML report artifacts**: the Stryker report is generated in `reports/mutation/`.
- **Dockerized runs**: consistent environment for CI and demo using Docker.

### Tech stack

- **Runtime**: Node.js (ES modules)
- **Web**: Express
- **Tests**: Mocha + Chai + Supertest
- **Mutation testing**: Stryker
- **CI/CD**: GitHub Actions (`pipelines/.github/workflows/cicd.yml`), Jenkins (`pipelines/Jenkinsfile`)
- **Containerization**: Docker, Docker Compose

### Getting started (local)

#### Prerequisites

- Node.js 18+ and npm
- (Optional) Docker Desktop

#### Install

```bash
npm install
```

#### Run the webpage

```bash
npm start
```

Open `http://localhost:8080`.

#### Run unit + API tests

```bash
npm test
```

#### Run mutation tests

```bash
npm run test:mutation
```

Open the HTML report at `reports/mutation/mutation.html`.

### Docker usage

- **Run CI checks in a container** (lint + unit tests + mutation tests):

```bash
docker compose up --build app
```

- **Run the web app container**:

```bash
docker compose up --build web
```

### CI/CD pipeline behavior (what it does)

Both GitHub Actions and Jenkins run the same quality gates:

- Install dependencies
- Lint
- Unit/API tests
- Mutation testing (Stryker)
- (Jenkins) Build Docker image

### Project structure (important folders)

- `src/main/`: backend logic + Express server + routes/services
- `src/public/`: webpage UI (HTML/CSS/JS)
- `tests/unit/`: Mocha tests (unit + API tests)
- `pipelines/`: Jenkinsfile + GitHub Actions workflow
- `infrastructure/docker/`: Dockerfile
- `docs/`: project plan, design, user guide, API docs


## User Guide – Mutation Testing Framework (Node.js)

### 1. Prerequisites

- Node.js 18+ and npm
- Git

### 2. Installation

```bash
git clone https://github.com/[username]/devopsproject-mutation-testing-framework.git
cd devopsproject-mutation-testing-framework
npm install
```

### 3. Running the Web Application (webpage)

```bash
npm start
```

Open `http://localhost:8080`.

### 4. Running the CLI demo (optional)

```bash
npm run start:cli
```

### 5. Running Unit + API Tests

```bash
npm test
```

### 6. Running Mutation Tests

```bash
npm run test:mutation
```

After completion, open the generated HTML report in `reports/mutation` to inspect killed and surviving mutants.

### 7. Running via Docker

#### Run CI checks (lint + unit tests + mutation tests)

```bash
docker compose up --build app
```

#### Run the web app container

```bash
docker compose up --build web
```

This exposes the webpage on `http://localhost:8080`.

### 8. Useful endpoints

- `GET /api/health`
- `POST /api/calculate` with JSON body:

```json
{ "price": 100, "discountRate": 0.1, "taxRate": 0.07 }
```

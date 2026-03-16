## API Documentation – Mutation Testing Framework (Node.js)

This project exposes a small Express-based HTTP API that powers the demo webpage UI.

### Base URL

- Local: `http://localhost:8080`

### Endpoints

#### `GET /api/health`

**Purpose**: health check for CI/CD, smoke tests, or load balancers.

**Response 200**:

```json
{ "status": "ok" }
```

#### `POST /api/calculate`

**Purpose**: calculates discounted price and invoice total (discount + tax).

**Request body** (`application/json`):

```json
{ "price": 100, "discountRate": 0.1, "taxRate": 0.07 }
```

**Response 200**:

```json
{
  "ok": true,
  "result": {
    "input": { "price": 100, "discountRate": 0.1, "taxRate": 0.07 },
    "discountedPrice": 90,
    "invoiceTotal": 96.3
  }
}
```

**Response 400** (invalid input):

```json
{
  "ok": false,
  "error": { "name": "TypeError", "message": "price must be a valid number" }
}
```

### Error handling convention

- Successful responses return `{ "ok": true, ... }`
- Client input errors return HTTP `400` with `{ "ok": false, "error": { name, message } }`


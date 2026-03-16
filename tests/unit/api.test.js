import request from 'supertest'
import { expect } from 'chai'
import { createApp } from '../../src/main/server.js'

describe('api', () => {
  it('GET /api/health returns ok', async () => {
    const app = createApp()
    const res = await request(app).get('/api/health').expect(200)
    expect(res.body).to.deep.equal({ status: 'ok' })
  })

  it('POST /api/calculate calculates pricing', async () => {
    const app = createApp()
    const res = await request(app)
      .post('/api/calculate')
      .send({ price: 100, discountRate: 0.1, taxRate: 0.07 })
      .expect(200)

    expect(res.body.ok).to.equal(true)
    expect(res.body.result.discountedPrice).to.equal(90)
    expect(res.body.result.invoiceTotal).to.equal(96.3)
  })

  it('POST /api/calculate returns 400 on invalid payload', async () => {
    const app = createApp()
    const res = await request(app)
      .post('/api/calculate')
      .send({ price: 'not-a-number', discountRate: 0.1, taxRate: 0.07 })
      .expect(400)

    expect(res.body.ok).to.equal(false)
    expect(res.body.error).to.have.property('message')
  })
})

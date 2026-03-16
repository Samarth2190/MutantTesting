import express from 'express'
import { calculatePricing } from '../services/pricingService.js'

const router = express.Router()

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

router.post('/calculate', (req, res) => {
  try {
    const { price, discountRate, taxRate } = req.body ?? {}
    const result = calculatePricing({ price, discountRate, taxRate })
    res.json({ ok: true, result })
  } catch (err) {
    res.status(400).json({
      ok: false,
      error: {
        name: err?.name ?? 'Error',
        message: err?.message ?? 'Bad Request'
      }
    })
  }
})

export { router as apiRouter }

import { expect } from 'chai'
import { calculatePricing } from '../../src/main/services/pricingService.js'

describe('pricingService', () => {
  it('returns discountedPrice and invoiceTotal', () => {
    const out = calculatePricing({ price: '200', discountRate: '0.1', taxRate: '0.05' })
    expect(out.discountedPrice).to.equal(180)
    expect(out.invoiceTotal).to.equal(189)
  })

  it('throws on NaN values', () => {
    expect(() => calculatePricing({ price: 'abc', discountRate: 0.1, taxRate: 0.05 }))
      .to.throw('price must be a valid number')
  })
})

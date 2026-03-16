import { expect } from 'chai'
import { calculateDiscount } from '../../src/main/calculator.js'

describe('calculateDiscount', () => {
  it('calculates discount correctly for valid inputs', () => {
    const result = calculateDiscount(100, 0.1)
    expect(result).to.equal(90)
  })

  it('throws an error for negative price', () => {
    expect(() => calculateDiscount(-10, 0.1)).to.throw('Price cannot be negative')
  })

  it('throws an error for invalid discount rate', () => {
    expect(() => calculateDiscount(100, -0.1)).to.throw('Discount rate must be between 0 and 1')
  })

  it('returns zero when discount makes price negative', () => {
    const result = calculateDiscount(50, 2)
    expect(result).to.equal(0)
  })
})

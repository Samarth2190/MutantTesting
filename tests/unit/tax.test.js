import { expect } from 'chai'
import { calculateTax, calculateTotalWithTax } from '../../src/main/tax.js'

describe('tax', () => {
  it('calculates tax for valid inputs', () => {
    expect(calculateTax(100, 0.1)).to.equal(10)
  })

  it('calculates total with tax', () => {
    expect(calculateTotalWithTax(100, 0.1)).to.equal(110)
  })

  it('rejects invalid taxRate', () => {
    expect(() => calculateTax(100, -0.1)).to.throw('taxRate must be between 0 and 1')
    expect(() => calculateTax(100, 1.1)).to.throw('taxRate must be between 0 and 1')
  })
})


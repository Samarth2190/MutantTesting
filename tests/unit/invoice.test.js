import { expect } from 'chai'
import { calculateInvoiceTotal } from '../../src/main/invoice.js'

describe('invoice', () => {
  it('applies discount then tax', () => {
    // price=200, discount 10% => 180, tax 5% => 189
    expect(calculateInvoiceTotal({ price: 200, discountRate: 0.1, taxRate: 0.05 })).to.equal(189)
  })

  it('rejects negative price', () => {
    expect(() => calculateInvoiceTotal({ price: -1, discountRate: 0.1, taxRate: 0.05 })).to.throw('price must be >= 0')
  })
})


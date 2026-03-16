import { assertNumber } from '../validator.js'
import { calculateDiscount } from '../calculator.js'
import { calculateInvoiceTotal } from '../invoice.js'

function parseFloatStrict (value, name) {
  const num = typeof value === 'number' ? value : Number.parseFloat(value)
  assertNumber(num, name)
  return num
}

function calculatePricing ({ price, discountRate, taxRate }) {
  const p = parseFloatStrict(price, 'price')
  const d = parseFloatStrict(discountRate, 'discountRate')
  const t = parseFloatStrict(taxRate, 'taxRate')

  const discountedPrice = calculateDiscount(p, d)
  const invoiceTotal = calculateInvoiceTotal({ price: p, discountRate: d, taxRate: t })

  return {
    input: { price: p, discountRate: d, taxRate: t },
    discountedPrice,
    invoiceTotal
  }
}

export { calculatePricing }


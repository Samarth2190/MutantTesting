import { assertNonNegative } from './validator.js'
import { calculateDiscount } from './calculator.js'
import { calculateTotalWithTax } from './tax.js'

function calculateInvoiceTotal ({ price, discountRate, taxRate }) {
  assertNonNegative(price, 'price')

  const discounted = calculateDiscount(price, discountRate)
  return calculateTotalWithTax(discounted, taxRate)
}

export { calculateInvoiceTotal }


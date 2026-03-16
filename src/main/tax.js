import { assertNonNegative, assertInRangeInclusive } from './validator.js'

function calculateTax (subtotal, taxRate) {
  assertNonNegative(subtotal, 'subtotal')
  assertInRangeInclusive(taxRate, 'taxRate', 0, 1)
  return subtotal * taxRate
}

function calculateTotalWithTax (subtotal, taxRate) {
  return subtotal + calculateTax(subtotal, taxRate)
}

export { calculateTax, calculateTotalWithTax }

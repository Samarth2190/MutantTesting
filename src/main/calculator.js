/**
 * Calculates the final price after applying a discount.
 * This function will be targeted by mutation testing.
 * @param {number} price - Original price
 * @param {number} discountRate - Discount rate between 0 and 1
 * @returns {number} Final price
 */
function calculateDiscount (price, discountRate) {
  if (price < 0) {
    throw new Error('Price cannot be negative')
  }
  if (discountRate < 0) {
    throw new Error('Discount rate must be between 0 and 1')
  }

  const discountAmount = price * discountRate
  const finalPrice = price - discountAmount

  if (finalPrice < 0) {
    return 0
  }

  return finalPrice
}

export { calculateDiscount }

import { calculateDiscount } from './calculator.js'
import { calculateInvoiceTotal } from './invoice.js'

function main () {
  const originalPrice = 100
  const discountRate = 0.1

  const finalPrice = calculateDiscount(originalPrice, discountRate)
  // Simple console output to keep the example small;
  // in a real project this could be an API or web app.
  console.log(`Final price after discount: ${finalPrice}`)

  const invoiceTotal = calculateInvoiceTotal({ price: originalPrice, discountRate, taxRate: 0.07 })
  console.log(`Invoice total (after discount + tax): ${invoiceTotal}`)
}

// In ESM, this file is executed only via `node src/main/app.js` (npm start),
// so we call main() directly.
main()

export { main }


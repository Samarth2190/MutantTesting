import { expect } from 'chai'
import { assertInRangeInclusive, assertNonNegative, assertNumber } from '../../src/main/validator.js'

describe('validator', () => {
  describe('assertNumber', () => {
    it('accepts a normal number', () => {
      expect(() => assertNumber(1, 'x')).to.not.throw()
    })

    it('rejects NaN', () => {
      expect(() => assertNumber(Number.NaN, 'x')).to.throw(TypeError, 'x must be a valid number')
    })

    it('rejects non-number types', () => {
      expect(() => assertNumber('1', 'x')).to.throw(TypeError, 'x must be a valid number')
    })
  })

  describe('assertNonNegative', () => {
    it('accepts zero', () => {
      expect(() => assertNonNegative(0, 'amount')).to.not.throw()
    })

    it('rejects negative values', () => {
      expect(() => assertNonNegative(-1, 'amount')).to.throw(RangeError, 'amount must be >= 0')
    })
  })

  describe('assertInRangeInclusive', () => {
    it('accepts boundary values', () => {
      expect(() => assertInRangeInclusive(0, 'rate', 0, 1)).to.not.throw()
      expect(() => assertInRangeInclusive(1, 'rate', 0, 1)).to.not.throw()
    })

    it('rejects values outside the range', () => {
      expect(() => assertInRangeInclusive(-0.01, 'rate', 0, 1)).to.throw(RangeError, 'rate must be between 0 and 1')
      expect(() => assertInRangeInclusive(1.01, 'rate', 0, 1)).to.throw(RangeError, 'rate must be between 0 and 1')
    })
  })
})

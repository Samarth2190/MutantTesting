function assertNumber (value, name) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a valid number`)
  }
}

function assertNonNegative (value, name) {
  assertNumber(value, name)
  if (value < 0) {
    throw new RangeError(`${name} must be >= 0`)
  }
}

function assertInRangeInclusive (value, name, min, max) {
  assertNumber(value, name)
  if (value < min || value > max) {
    throw new RangeError(`${name} must be between ${min} and ${max}`)
  }
}

export { assertNumber, assertNonNegative, assertInRangeInclusive }

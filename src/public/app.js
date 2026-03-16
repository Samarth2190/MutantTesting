const form = document.getElementById('calc-form')
const resultEl = document.getElementById('result')
const errorEl = document.getElementById('error')
const resetBtn = document.getElementById('reset-btn')

function showError (message) {
  errorEl.textContent = message
  errorEl.hidden = false
}

function clearError () {
  errorEl.textContent = ''
  errorEl.hidden = true
}

function setResult (data) {
  resultEl.classList.remove('muted')
  resultEl.textContent = JSON.stringify(data, null, 2)
}

function resetForm () {
  form.price.value = 100
  form.discountRate.value = 0.10
  form.taxRate.value = 0.07
  clearError()
  resultEl.classList.add('muted')
  resultEl.textContent = 'Submit the form to calculate.'
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  clearError()

  const payload = {
    price: form.price.value,
    discountRate: form.discountRate.value,
    taxRate: form.taxRate.value
  }

  try {
    const res = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const json = await res.json()
    if (!json.ok) {
      showError(json?.error?.message ?? 'Calculation failed')
      return
    }

    setResult(json.result)
  } catch (err) {
    showError(err?.message ?? 'Network error')
  }
})

resetBtn.addEventListener('click', resetForm)


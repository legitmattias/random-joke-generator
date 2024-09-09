import { handleNameSubmission } from './formHandler.js'

document.addEventListener('DOMContentLoaded', () => {
  const saveNameBtn = document.querySelector('[data-save-name-btn]')
  const nameInput = document.querySelector('[data-name-input]')

  if (nameInput) {
    nameInput.focus()
  }

  if (saveNameBtn) {
    saveNameBtn.addEventListener('click', handleNameSubmission)
  }
})

import JokeGenerator from './main.js'

/**
 * Handles modal form submission and shows the joke generator.
 */
export function handleNameSubmission () {
  const nameInput = document.querySelector('[data-name-input]').value
  if (nameInput) {
    document.querySelector('[data-name-modal]').style.display = 'none'
    document.querySelector('[data-joke-container]').style.display = 'block'
    // eslint-disable-next-line no-new
    new JokeGenerator(nameInput)
  } else {
    alert('Please enter your name!')
  }
}

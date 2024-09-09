/**
 * Class representing a joke generator with a greeting feature.
 * Handles fetching jokes, displaying them, and showing a personalized greeting.
 */
class JokeGenerator {
  /**
   * Creates a JokeGenerator instance and sets up DOM elements.
   *
   * @param {string} name - The name of the user to greet.
   */
  constructor (name) {
    this.setupElement = document.querySelector('[data-setup]')
    this.punchlineElement = document.querySelector('[data-punchline]')
    this.jokeButton = document.querySelector('[data-joke-btn]')
    this.greetingElement = document.querySelector('[data-greeting]')
    this.name = name

    // Attach event listener to the button.
    this.jokeButton.addEventListener('click', () => this.fetchAndDisplayJoke())

    // Display the first greeting with the name.
    this.displayGreeting()
  }

  /**
   * Fetches a random joke from the API.
   *
   * @returns {Promise<{setup: string, punchline: string}>} A promise that resolves to a joke object.
   */
  async getJoke () {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      const joke = await response.json()
      return joke
    } catch (error) {
      console.error('Failed to fetch joke', error)
    }
  }

  /**
   * Fetches a joke and updates the DOM to display it.
   */
  async fetchAndDisplayJoke () {
    const joke = await this.getJoke()
    if (joke) {
      this.setupElement.textContent = joke.setup
      this.punchlineElement.textContent = joke.punchline

      // Update greeting after fetching a joke.
      this.displayGreeting()
    }
  }

  /**
   * Displays a funny greeting with random variations.
   */
  displayGreeting () {
    const greetings = [
      `Hey ${this.name}, here's a joke for you!`,
      `${this.name}, brace yourself for this one!`,
      `${this.name}, prepare to laugh!`,
      `Alright ${this.name}, this one's a good one!`,
      `Here's something hilarious, ${this.name}!`
    ]
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    this.greetingElement.textContent = randomGreeting
  }
}

/**
 * Handles modal form submission and shows the joke generator.
 */
function handleNameSubmission () {
  const nameInput = document.querySelector('[data-name-input]').value
  if (nameInput) {
    // Hide the modal.
    document.querySelector('[data-name-modal]').style.display = 'none'

    // Show the joke generator container.
    document.querySelector('[data-joke-container]').style.display = 'block'

    // Initialize the JokeGenerator with the user's name.
    // eslint-disable-next-line no-unused-vars
    const jokeGenerator = new JokeGenerator(nameInput)
  } else {
    alert('Please enter your name!')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Ensure the save button calls the handleNameSubmission function.
  const saveNameBtn = document.querySelector('[data-save-name-btn]')
  if (saveNameBtn) {
    saveNameBtn.addEventListener('click', handleNameSubmission)
  }
})

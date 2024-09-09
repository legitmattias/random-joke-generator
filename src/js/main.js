/**
 * Class representing a joke generator.
 * Handles fetching jokes from an API and updating the DOM to display them.
 */
class JokeGenerator {
  /**
   * Creates a JokeGenerator instance.
   * Sets up the necessary DOM elements and attaches the event listener to the button.
   */
  constructor () {
    this.setupElement = document.querySelector('.setup')
    this.punchlineElement = document.querySelector('.punchline')
    this.jokeButton = document.querySelector('.joke-btn')

    // Attach event listener to the button.
    this.jokeButton.addEventListener('click', () => this.fetchAndDisplayJoke())
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
   * Updates the setup and punchline elements with the fetched joke data.
   *
   * @returns {Promise<void>}
   */
  async fetchAndDisplayJoke () {
    const joke = await this.getJoke()
    if (joke) {
      this.setupElement.textContent = joke.setup
      this.punchlineElement.textContent = joke.punchline
    }
  }
}

// Initialize the JokeGenerator when the DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const jokeGenerator = new JokeGenerator()
})

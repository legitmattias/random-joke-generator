/**
 *
 */
class JokeGenerator {
  /**
   *
   */
  constructor () {
    this.setupElement = document.querySelector('.setup')
    this.punchlineElement = document.querySelector('.punchline')
    this.jokeButton = document.querySelector('.joke-btn')

    // Attach event listener to the button.
    this.jokeButton.addEventListener('click', () => this.fetchAndDisplayJoke())
  }

  // Method to fetch a random joke from the API.
  /**
   *
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

  // Method to update the DOM with the fetched joke.
  /**
   *
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
  const jokeGenerator = new JokeGenerator()
})

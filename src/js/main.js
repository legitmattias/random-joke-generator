// Fetch a random joke from the API
async function getJoke() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const joke = await response.json();
  return joke;
}

// Update the DOM with the fetched joke
function displayJoke(joke) {
  const setupElement = document.querySelector('.setup');
  const punchlineElement = document.querySelector('.punchline');

  setupElement.textContent = joke.setup;
  punchlineElement.textContent = joke.punchline;
}

// Add event listener to the button
document.querySelector('.joke-btn').addEventListener('click', async () => {
  const joke = await getJoke();
  displayJoke(joke);
});

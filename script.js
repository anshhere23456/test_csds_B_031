async function getJoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
      const joke = data.type === "single" ? data.joke : `${data.setup} ... ${data.delivery}`;
      displayJoke(joke);
    } catch (error) {
      displayJoke("Oops! Couldn't fetch a joke.");
    }
  }
  
  function displayJoke(joke) {
    document.getElementById("joke").textContent = joke;
    document.getElementById("character-count").textContent = `Character count: ${joke.length}`;
  }
  
  function clearJoke() {
    document.getElementById("joke").textContent = "Press the button for a joke!";
    document.getElementById("character-count").textContent = "Character count: 0";
  }
  
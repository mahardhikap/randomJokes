const randomJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';
  const headers = { 'Accept': 'application/json' };
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data
}

randomJoke()
.then((result) => {
    console.log(`id: ${result.id}`)
    console.log(`Joke: ${result.joke}`)

    // Menyimpan data sementara ke penyimpanan lokal
    const storedJokes = JSON.parse(localStorage.getItem('jokes')) || [];
    storedJokes.push(result.joke);
    localStorage.setItem('jokes', JSON.stringify(storedJokes));
})
.catch(error => console.error(error.message));

window.onload = function() {
    const storedJokes = JSON.parse(localStorage.getItem('jokes')) || [];
    const apiList = document.getElementById("listJoke");
    storedJokes.forEach(joke => {
      const li = document.createElement('li');
      li.textContent = joke;
      apiList.appendChild(li);
    });
  };
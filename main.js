const url = `https://pokeapi.co/api/v2/pokemon/mew/`

console.log(document.querySelector(`.form-search`))

// fetch request goes to URL
// makes a request for data from pokemon api
fetch(url)
// data is retrieved from web api
// data is translated
.then(res => res.json())
// data is console logged
.then(pokemon => console.log(pokemon))



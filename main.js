document.querySelector(`.form-search`).addEventListener(`submit`,(e) => { 
    e.preventDefault()
    console.log(e.target.search.value)
    fetchPokemon(e.target.search.value)
})

// fetch request goes to URL
// makes a request for data from pokemon api
let fetchPokemon = pokemon => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    // data is retrieved from web api
    // data is translated
    .then(res => res.json())
    // data is console logged
    .then(pokemon => buildCard(pokemon))
}

let buildCard = pokemon => {
    // grab HTML els 
    let name = document.querySelector(`#name`)
    let img = document.querySelector(`#pokemon-img`)

    // 
    name.textContent = `${pokemon.name} : ${pokemon.id}`
    img.src = pokemon.sprites.front_default
}
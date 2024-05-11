const pokelist = document.querySelector("#pokedex");

function addPokemonItem(pokemon) {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  h2.innerHTML = pokemon.id;
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", pokemon.sprites.front_default);
  const p = document.createElement("p");
  p.innerHTML = pokemon.name;

  li.appendChild(div);
  div.appendChild(img);
  div.appendChild(p);

  pokelist.appendChild(li);
}

async function getPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    console.log(data);
    addPokemonItem(data);
  } catch (error) {
    console.log();
  }
}

for (let i = 1; i <= 9; i++) {
  getPokemon(i);
}

const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonByIdorName(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response => {
    return response.json();
  });
}

export default { fetchPokemonByIdorName };

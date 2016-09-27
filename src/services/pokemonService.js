
const ROOT_URL = 'http://pokeapi.co/api/v2/pokemon/';

export default {
  getPokemonByName(name) {
    const REQUEST_URL = `${ROOT_URL}${name}`;
    const req = new Request(REQUEST_URL);

    return fetch(req).then(res => {
      return res.json();
    });
  },

  getPokemonByNumber(num) {
    const REQUEST_URL = `${ROOT_URL}${num}`;
    const req = new Request(REQUEST_URL);

    return fetch(req).then(res => {
      return res.json();
    });
  },

  getPokemon(offset) {
    offset = offset || 0;
    const REQUEST_URL = `${ROOT_URL}?offset=${offset}`;
    const req = new Request(REQUEST_URL);

    return fetch(req).then(res => {
      return res.json();
    });
  }
}
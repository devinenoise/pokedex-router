import request from 'superagent';

export const getPokemon = (charId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${charId}`);


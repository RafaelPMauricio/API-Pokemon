const rotas = require("express")();
const {
  listagemPokemon,
  pokemonPorNomeOuId,
} = require("./controladores/pokemon");

rotas.get("/pokemon", listagemPokemon);
rotas.get("/pokemon/:idOuNome", pokemonPorNomeOuId);

module.exports = rotas;

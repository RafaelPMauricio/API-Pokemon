const rotas = require("express")();
const {
  listagemPokemonPorPagina,
  pokemonPorNomeOuId,
} = require("./controladores/pokemon");

rotas.get("/pokemon/:pagina", listagemPokemonPorPagina);
rotas.get("/pokemon/detalhes/:idOuNome", pokemonPorNomeOuId);

module.exports = rotas;

const rotas = require("express")();
const { listagemPokemon } = require("./controladores/pokemon");

rotas.get("/pokemon", listagemPokemon);

module.exports = rotas;

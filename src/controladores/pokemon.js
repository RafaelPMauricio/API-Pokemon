const { listarPokemons } = require("utils-playground");

const listagemPokemon = async (req, res) => {
  try {
    const pokemons = await listarPokemons();

    return res.status(200).json(pokemons.results);
  } catch (erro) {
    return res.status(500).json({ mensagem: "Erro do servidor." });
  }
};

module.exports = { listagemPokemon };

const { listarPokemons, detalharPokemon } = require("utils-playground");

const listagemPokemonPorPagina = async (req, res) => {
  const { pagina } = req.params;

  try {
    const pokemons = await listarPokemons(pagina);

    return res.status(200).json(pokemons.results);
  } catch (erro) {
    return res.status(500).json({ mensagem: "Erro do servidor." });
  }
};

const pokemonPorNomeOuId = async (req, res) => {
  const { idOuNome } = req.params;

  try {
    const {
      id,
      name,
      types,
      stats,
      abilities,
      height,
      weight,
      base_experience,
      species,
      forms,
    } = await detalharPokemon(idOuNome);

    if (!id) {
      return res.status(404).json({ mensagem: "Pokémon não encontrado." });
    }

    const pokemon = {
      id,
      name,
      types,
      stats,
      abilities,
      height,
      weight,
      base_experience,
      species,
      forms,
    };

    return res.status(200).json(pokemon);
  } catch (erro) {
    return res.status(500).json({ mensagem: "Erro do servidor." });
  }
};

module.exports = { listagemPokemonPorPagina, pokemonPorNomeOuId };

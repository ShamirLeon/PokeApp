import { useEffect, useState } from "react";

export const PokemonProvider = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=1&offset=1`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    console.log(results)

    setAllPokemons([...allPokemons,...results]);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
};

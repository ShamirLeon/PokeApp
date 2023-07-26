import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({children}) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true)

  const getAllPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=20&offset=300`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    // console.log(results[1]);

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false)
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        loading,
        setLoading,
      }}
    >{children}</PokemonContext.Provider>
  );
};

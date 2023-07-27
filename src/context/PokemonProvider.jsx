import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const baseURL = "https://pokeapi.co/api/v2/";

  /* Get first 50 15 pokemons */
  const getAllPokemons = async (limit = 15) => {
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  /* Get global pokemons */
  const getGlobalPokemons = async () => {
    const res = await fetch(`${baseURL}pokemon?limit=10000&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  /* Load more button */
  const loadMore = () => setOffset(offset + 15);

  /* Filter pokemons */
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const filterPokemons = (nameType) => {
    const filteredResults = globalPokemons.filter((pokemon) =>
      pokemon.types.map((type) => type.type.name).includes(nameType)
    );

    setFilteredPokemons(filteredResults);
    console.log(filteredPokemons);
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        globalPokemons,
        loading,
        setLoading,
        loadMore,

        filterPokemons,
        filteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

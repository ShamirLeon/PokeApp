import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState("");

  const baseURL = "https://pokeapi.co/api/v2/";

  /* Get first 15 pokemons */
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
    const res = await fetch(`${baseURL}pokemon?limit=2000&offset=${offset}`);
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

  /* Clear filter button */
  const clearFilter = () => {
    setActive("");
    setFilteredPokemons([]);
  };

  /* Filter pokemons */
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const filterPokemons = (nameType, location) => {
    if (location == "/favs") {
      console.log("favs");
      const filteredResults = favsPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(nameType)
      );

      setFilteredPokemons(filteredResults);
    } else {
      const filteredResults = globalPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(nameType)
      );
      setFilteredPokemons(filteredResults);
    }
  };

  /* Search input filter */
  const inputFilter = (value) => {
    const filterPokemons = globalPokemons.filter((pokemon) =>
      pokemon.name.includes(value)
    );
    setFilteredPokemons(filterPokemons);

    const inputSearch = document.getElementById("inputSearch");
    console.log(inputSearch);
    inputSearch.addEventListener("search", () => {
      clearFilter();
    });
  };

  /* favorites page */

  const [favsPokemons, setFavsPokemons] = useState([]);
  useEffect(() => {
    getFavoritesPokemons();
  }, []);

  const getFavoritesPokemons = () => {
    const savedPokemons = localStorage.getItem("FavsPokemons");
    const array = JSON.parse(savedPokemons);
    if (savedPokemons) setFavsPokemons(array);
  };

  const handleAddPokemon = (newPokemon) => {
    // Verificar si el Pokémon ya está en la lista de favoritos
    const isPokemonInFavorites = favsPokemons.some(
      (pokemon) => pokemon.id === newPokemon.id
    );

    // Si el Pokémon no está en la lista, agrégalo
    if (!isPokemonInFavorites) {
      const updatedFavsPokemons = [...favsPokemons, newPokemon];
      setFavsPokemons(updatedFavsPokemons);
      localStorage.setItem("FavsPokemons", JSON.stringify(updatedFavsPokemons));
    }
  };

  const handleRemPokemon = (id) => {
    // Buscar el índice del Pokémon que deseas eliminar
    const indexToRemove = favsPokemons.findIndex(
      (pokemon) => pokemon.id === id
    );

    // Crear una nueva copia del array de favoritos sin el Pokémon
    if (indexToRemove !== -1) {
      const updatedFavsPokemons = [
        ...favsPokemons.slice(0, indexToRemove),
        ...favsPokemons.slice(indexToRemove + 1),
      ];

      // Actualizar el estado con el nuevo array de favoritos
      setFavsPokemons(updatedFavsPokemons);

      // Guardar el nuevo array en el localStorage
      localStorage.setItem("FavsPokemons", JSON.stringify(updatedFavsPokemons));
    }
  };

  /* Handle Side Menu Mobile Devices */
  const SideMenu = document.querySelector(".SideMenu");

  const [activeSideMenu, setActiveSideMenu] = useState(false);

  function HandleSideMenu() {
    SideMenu.classList.toggle("activeSideMenu");
    setActiveSideMenu(!activeSideMenu);
  }

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

        active,
        setActive,
        clearFilter,

        inputFilter,

        /* Favorites page */
        favsPokemons,
        getFavoritesPokemons,
        handleAddPokemon,
        handleRemPokemon,

        /* Handle Side Menu */
        HandleSideMenu,
        activeSideMenu,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

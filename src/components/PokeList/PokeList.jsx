import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";

import SadPikachu from "../../assets/pika-sad.gif";

import PokeItem from "./PokeItem";
import Loader from "../Loader/Loader";
import Form from "../Form/Form";

const PokeList = ({ route }) => {
  const {
    allPokemons,
    loading,
    loadMore,
    filteredPokemons,
    favsPokemons,
    handleAddPokemon,
    handleRemPokemon,
  } = useContext(PokemonContext);

  const [favoritesMap, setFavoritesMap] = useState({});

  useEffect(() => {
    // Creamos un mapa para rastrear los Pokémon favoritos
    const favsMap = {};
    favsPokemons.forEach((pokemon) => {
      favsMap[pokemon.id] = true;
    });
    setFavoritesMap(favsMap);
  }, [favsPokemons]);

  const bgColor1 = "#EAEAEA";
  const bgColor2 = "rgba(234, 234, 234, .5)";

  return (
    <>
      {route == "/" ? (
        loading ? (
          <Loader />
        ) : (
          <main>
            {filteredPokemons.length ? (
              <>
                <Form id={2} />
                <p className="Search__Info">
                  {filteredPokemons.length} results were found:
                </p>
                {filteredPokemons.map((pokemon, index) => (
                  <PokeItem
                    pokemon={pokemon}
                    key={pokemon.id}
                    color={index % 2 === 0 ? bgColor1 : bgColor2}
                    isFavorite={favoritesMap[pokemon.id] || false}
                    handleAddPokemon={handleAddPokemon} // Pasar el método handleAddPokemon
                    handleRemPokemon={handleRemPokemon}
                  />
                ))}
              </>
            ) : (
              <>
                <Form id={2} />
                {allPokemons.map((pokemon, index) => (
                  <PokeItem
                    pokemon={pokemon}
                    key={pokemon.id}
                    color={index % 2 === 0 ? bgColor1 : bgColor2}
                    isFavorite={favoritesMap[pokemon.id] || false}
                    handleAddPokemon={handleAddPokemon} // Pasar el método handleAddPokemon
                    handleRemPokemon={handleRemPokemon}
                  />
                ))}
                <div className="LoadMore__Container">
                  <button className="LoadMore" onClick={loadMore}>
                    Load More
                  </button>
                </div>
              </>
            )}
          </main>
        )
      ) : (
        <>
          {filteredPokemons.length ? (
            <>
              <p className="Search__Info">
                {filteredPokemons.length} results were found:
              </p>
              {filteredPokemons.map((pokemon, index) => (
                <PokeItem
                  pokemon={pokemon}
                  key={pokemon.id}
                  color={index % 2 === 0 ? bgColor1 : bgColor2}
                  isFavorite={favoritesMap[pokemon.id] || false}
                  handleAddPokemon={handleAddPokemon} // Pasar el método handleAddPokemon
                  handleRemPokemon={handleRemPokemon}
                />
              ))}
            </>
          ) : (
            <>
              {favsPokemons.length == 0 ? (
                <figure className="Figure">
                  <img src={SadPikachu} alt="Sad Pikachu" />
                  <p>No favorites pokemons found.</p>
                </figure>
              ) : (
                favsPokemons.map((pokemon, index) => (
                  <PokeItem
                    pokemon={pokemon}
                    key={pokemon.id}
                    color={index % 2 === 0 ? bgColor1 : bgColor2}
                    isFavorite={favoritesMap[pokemon.id] || false}
                    handleAddPokemon={handleAddPokemon} // Pasar el método handleAddPokemon
                    handleRemPokemon={handleRemPokemon} // Establecer si es favorito o no
                  />
                ))
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default PokeList;

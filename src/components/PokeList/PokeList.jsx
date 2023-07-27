import { useContext } from "react";
import PokeItem from "./PokeItem";
import { PokemonContext } from "../../context/PokemonContext";
import Loader from "../Loader/Loader";

const PokeList = () => {
  const { allPokemons, loading, loadMore, filteredPokemons } =
    useContext(PokemonContext);

  const bgColor1 = "#EAEAEA";
  const bgColor2 = "#FFF";

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          {filteredPokemons.length ? (
            <>
              {filteredPokemons.map((pokemon, index) => (
                <PokeItem
                  pokemon={pokemon}
                  key={pokemon.id}
                  color={index % 2 === 0 ? bgColor1 : bgColor2}
                />
              ))}
            </>
          ) : (
            <>
              {allPokemons.map((pokemon, index) => (
                <PokeItem
                  pokemon={pokemon}
                  key={pokemon.id}
                  color={index % 2 === 0 ? bgColor1 : bgColor2}
                />
              ))}
            </>
          )}
          <button className="LoadMore" onClick={loadMore}>
            Load More
          </button>
        </main>
      )}
    </>
  );
};

export default PokeList;

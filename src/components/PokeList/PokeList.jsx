import { useContext } from "react";
import PokeItem from "./PokeItem";
import { PokemonContext } from "../../context/PokemonContext";
import Loader from "../Loader/Loader";

const PokeList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <main>
          {allPokemons.map((pokemon) => (
            <PokeItem pokemon={pokemon} key={pokemon.id} />
          ))}
        </main>
      )}
    </>
  );
};

export default PokeList;

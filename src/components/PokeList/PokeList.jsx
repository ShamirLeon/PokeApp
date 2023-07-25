import { useContext } from "react";
import PokeItem from "./PokeItem";
import { PokemonContext } from "../../context/PokemonContext";

const PokeList = () => {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <main>
      {allPokemons.map((pokemon) => (
        <PokeItem pokemon={pokemon} key={pokemon.id} />
      ))}
    </main>
  );
};

export default PokeList;

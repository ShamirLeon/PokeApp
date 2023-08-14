import { useState } from "react";
import StarIcon from "../../assets/Star";
import PokeCard from "../PokeCard/PokeCard";
import PokeInfo from "../PokeInfo/PokeInfo";

const PokeItem = ({
  pokemon,
  color,
  handleAddPokemon,
  handleRemPokemon,
  isFavorite,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ backgroundColor: `${color}` }}>
      <button
        onClick={() => {
          if (!isFavorite) {
            handleAddPokemon(pokemon);
          } else {
            handleRemPokemon(pokemon.id);
          }
        }}
      >
        <StarIcon
          className="PokeItem__Star"
          color={isFavorite ? "#F6FB00" : "none"}
        />
      </button>

      <div 
        className={`PokeItem  ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <PokeCard
          height={pokemon.height}
          weight={pokemon.weight}
          number={pokemon.id.toString()}
          name={pokemon.name}
          type1={pokemon.types[0].type.name}
          type2={pokemon.types[1]?.type.name}
          img={pokemon.sprites.other.dream_world.front_default}
        />
        <PokeInfo
          Hp={pokemon.stats[0].base_stat}
          Attack={pokemon.stats[1].base_stat}
          Defense={pokemon.stats[2].base_stat}
          specialAttack={pokemon.stats[3].base_stat}
          specialDefense={pokemon.stats[4].base_stat}
          speed={pokemon.stats[5].base_stat}
        />
      </div>
    </div>
  );
};

export default PokeItem;

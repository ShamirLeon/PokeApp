import StarIcon from "../../assets/Star";
import PokeCard from "../PokeCard/PokeCard";
import PokeInfo from "../PokeInfo/PokeInfo";

const PokeItem = ({ pokemon }) => {
  return (
    <div className="PokeItem">
      <PokeCard
        height={pokemon.height}
        weight={pokemon.weight}
        number={pokemon.id}
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
      <StarIcon className="PokeItem__Star" />
    </div>
  );
};

export default PokeItem;

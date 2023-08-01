import { useContext } from "react";
import StarIcon from "../../assets/Star";
import PokeCard from "../PokeCard/PokeCard";
import PokeInfo from "../PokeInfo/PokeInfo";
import { PokemonContext } from "../../context/PokemonContext";

const PokeItem = ({
  pokemon,
  color,
  handleAddPokemon,
  handleRemPokemon,
  isFavorite,
}) => {
  const { favsPokemons } = useContext(PokemonContext);

  return (
    <div className="PokeItem" style={{ backgroundColor: `${color}` }}>
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

      {favsPokemons.length == 0 ? (
        <button
          className="PokeItem__Star"
          onClick={() => {
            handleAddPokemon(pokemon);
          }}
        >
          <StarIcon color={"none"} />
        </button>
      ) : null}

      {/* {favsPokemons.map((pokemonFav) => (
        <button
          key={pokemonFav.id}
          onClick={() => {
            if (pokemonFav.id !== pokemon.id) {
              handleAddPokemon(pokemon);
            } else {
              handleRemPokemon(pokemon.id);
            }
          }}
        >
          <StarIcon
            className="PokeItem__Star"
            color={pokemonFav.id === pokemon.id ? "#F6FB00" : "none"}
          />
        </button>
      ))} */}
    </div>
  );
};

export default PokeItem;

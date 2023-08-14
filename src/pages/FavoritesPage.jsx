import { useLocation } from "wouter";
import PokeList from "../components/PokeList/PokeList";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useEffect } from "react";

const FavsPage = (params) => {
  const [location, setLocation] = useLocation();

  const { getFavoritesPokemons, clearFilter } = useContext(PokemonContext)

  useEffect(()=>{
    clearFilter();
    getFavoritesPokemons();
  },[])

  return (
    <div className="Favs__Container">
      <PokeList route={location}></PokeList>
    </div>
  );
};

export default FavsPage;

import { useLocation } from "wouter";
import PokeList from "../components/PokeList/PokeList";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useEffect } from "react";

const HomePage = () => {
  const [location, setLocation] = useLocation();

  const { clearFilter } = useContext(PokemonContext);

  useEffect(() => {
    clearFilter();
  }, []);

  return (
    <>
      <div className="Main-content">
        <PokeList route={location} />
      </div>
    </>
  );
};

export default HomePage;

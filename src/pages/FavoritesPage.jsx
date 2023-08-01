import { useLocation } from "wouter";
import PokeList from "../components/PokeList/PokeList";

const FavsPage = (params) => {
  const [location, setLocation] = useLocation();

  return (
    <div className="Favs__Container">
      <PokeList route={location}></PokeList>
    </div>
  );
};

export default FavsPage;

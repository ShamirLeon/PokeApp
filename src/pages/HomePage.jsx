import { useLocation } from "wouter";
import PokeList from "../components/PokeList/PokeList";

const HomePage = () => {
  const [location, setLocation] = useLocation();
  return (
    <>
      <div className="Main-content">
        <PokeList route={location} />
      </div>
    </>
  );
};

export default HomePage;

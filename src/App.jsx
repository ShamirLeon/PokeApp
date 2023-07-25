import Navigation from "./components/Navigation/Navigation";
import PokeList from "./components/PokeList/PokeList";
import SideMenu from "./components/SideMenu/SideMenu";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <>
      <Navigation />
      <SideMenu />
      <div className="Main-content">
        <PokeList />
      </div>
      <PokemonProvider>
      </PokemonProvider>
    </>
  );
}

export default App;

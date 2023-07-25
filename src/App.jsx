import Navigation from "./components/Navigation/Navigation";
import PokeList from "./components/PokeList/PokeList";
import SideMenu from "./components/SideMenu/SideMenu";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <>
      <Navigation />
      <SideMenu />
      <PokemonProvider>
      <div className="Main-content">
        <PokeList />
      </div>
      </PokemonProvider>
    </>
  );
}

export default App;

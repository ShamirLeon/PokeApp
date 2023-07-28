import Atributtion from "./components/Atributtion/Atributtion";
import Navigation from "./components/Navigation/Navigation";
import PokeList from "./components/PokeList/PokeList";
import SideMenu from "./components/SideMenu/SideMenu";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
      <Navigation />
        <SideMenu />
        <div className="Main-content">
          <PokeList />
        </div>
      </PokemonProvider>
      <Atributtion></Atributtion>
    </>
  );
}

export default App;

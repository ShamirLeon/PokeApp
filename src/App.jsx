import { AppRouter } from "./AppRouter";
import Atributtion from "./components/Atributtion/Atributtion";
import Navigation from "./components/Navigation/Navigation";
import SideMenu from "./components/SideMenu/SideMenu";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <Navigation />
        <SideMenu />
        <AppRouter></AppRouter>
      </PokemonProvider>
      <Atributtion></Atributtion>
    </>
  );
}

export default App;

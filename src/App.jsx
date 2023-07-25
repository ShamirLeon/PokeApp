import Navigation from "./components/Navigation/Navigation";
import PokeList from "./components/PokeList/PokeList";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <Navigation />
        <SideMenu />
      <div className="Main-content">
        <PokeList />
      </div>
    </>
  );
}

export default App;

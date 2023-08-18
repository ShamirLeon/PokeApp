import { useContext } from "react";
import Logo from "../../assets/Pokédex_logo.png";
import StarIcon from "../../assets/Star";

import { PokemonContext } from "../../context/PokemonContext";
import { Route, Link, Router, Switch } from "wouter";
import HomePage from "../../pages/HomePage";
import Form from "../Form/Form";

const Navigation = () => {
  const { favsPokemons } = useContext(PokemonContext);

  return (
    <header>
      <Router>
        <nav className="Navigation">
          <Link href="/">
            <img src={Logo} alt="Pokemon Logo" className="Navigation__Logo" />
          </Link>
          <div className="Navigation__Submenu">
            <Form id={1} idBtn={1} />

            <div className="Navigation__Favorites">
              <Link href="/favs">
                <StarIcon className="Star" color={"#F6FB00"} />
              </Link>
              <span className="Stars">STARS</span>
              <span className="Number">{favsPokemons.length}</span>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </header>
  );
};

export default Navigation;

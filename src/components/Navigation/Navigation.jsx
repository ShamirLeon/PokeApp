import { useContext, useState } from "react";
import Logo from "../../assets/Pokédex_logo.png";
import StarIcon from "../../assets/Star";
import SearchIcon from "../../assets/icons-search.svg";

import { PokemonContext } from "../../context/PokemonContext";
import { Route, Link, Router, Switch } from "wouter";
import HomePage from "../../pages/home";

const Navigation = () => {
  const { inputFilter } = useContext(PokemonContext);

  const [form, setForm] = useState("");

  return (
    <header>
      <Router>
        <nav className="Navigation">
          <Link href="/">
            <img src={Logo} alt="" className="Navigation__Logo" />
          </Link>
          <div className="Navigation__Submenu">
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                inputFilter(form);
              }}
            >
              <input
                id="inputSearch"
                type="search"
                name="search"
                onChange={(ev) => {
                  setForm(ev.target.value);
                }}
                value={form}
                placeholder="Search pokemon"
                autoComplete="off"
              />
              <button type="submit" className="Navigation__Btn">
                <img src={SearchIcon} />
              </button>
            </form>

            <div className="Navigation__Favorites">
              <Link href="/favs">
                <StarIcon className="Star" />
              </Link>
              <span className="Stars">STARS</span>
              <span className="Number">18</span>
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

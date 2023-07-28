import { useContext, useState } from "react";
import Logo from "../../assets/Pokédex_logo.png";
import StarIcon from "../../assets/Star";
import SearchIcon from "../../assets/icons-search.svg"

import { PokemonContext } from "../../context/PokemonContext";

const Navigation = () => {
  const { inputFilter } = useContext(PokemonContext);

  const [form, setForm] = useState("");

  return (
    <header>
      <nav className="Navigation">
        <img src={Logo} alt="" className="Navigation__Logo" />
        <div className="Navigation__Submenu">
          <form onSubmit={ev => {ev.preventDefault(); inputFilter(form);}}>
            <input
              id="inputSearch"
              type="search"
              name="search"
              onChange={ev => {setForm(ev.target.value)}}
              value={form}
              placeholder="Search pokemon"
              autoComplete="off"
            />
          <button type="submit" className="Navigation__Btn">
            <img src={SearchIcon} />
          </button>
          </form>

          <div className="Navigation__Favorites">
            <StarIcon className="Star" />
            <span className="Stars">STARS</span>
            <span className="Number">18</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

import { useContext, useState } from "react";
import Logo from "../../assets/Pokédex_logo.png";
import StarIcon from "../../assets/Star";
import { PokemonContext } from "../../context/PokemonContext";

const Navigation = () => {
  const { inputFilter } = useContext(PokemonContext);

  const [form, setForm] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setForm(e.target.value);
    inputFilter(form);
  };

  return (
    <header>
      <nav className="Navigation">
        <img src={Logo} alt="" className="Navigation__Logo" />
        <div className="Navigation__Submenu">
          <form>
            <input
              id="inputSearch"
              type="search"
              name="search"
              value={form}
              onChange={onChange}
              placeholder="Search pokemon"
              autoComplete="off"
            />
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

import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

import cancelIcon from '../../assets/cancel-icon.svg'

const SideMenu = () => {
  const { filterPokemons, active, setActive, clearFilter } =
    useContext(PokemonContext);

  const buttons = [
    { id: 1, color: "fire" },
    { id: 2, color: "grass" },
    { id: 3, color: "steel" },
    { id: 4, color: "water" },
    { id: 5, color: "psychic" },
    { id: 6, color: "ground" },
    { id: 7, color: "ice" },
    { id: 8, color: "flying" },
    { id: 9, color: "ghost" },
    { id: 10, color: "normal" },
    { id: 11, color: "poison" },
    { id: 12, color: "rock" },
    { id: 13, color: "fighting" },
    { id: 14, color: "dark" },
    { id: 15, color: "bug" },
    { id: 16, color: "dragon" },
    { id: 17, color: "electric" },
    { id: 18, color: "fairy" },
    { id: 19, color: "shadow" },
    { id: 20, color: "unknow" },
  ];

  return (
    <aside className="SideMenu">
      {buttons.map(({ id, color }) => (
        <div className="SideMenu__BtnContainer" key={id}>
          <button
            className={active == color ? `SideMenu__Btn ${color} active` : `SideMenu__Btn ${color}`}
            onClick={() => {
              filterPokemons(color);
              setActive(color);
            }}
          >
            {color}
          </button>
          {active == color ? (
            <button style={{backgroundColor: active == color ? `var(--color-${color})` : null}} className="clearFilter" onClick={clearFilter}>
              <img src={cancelIcon} />
            </button>
          ) : null}
        </div>
      ))}
    </aside>
  );
};

export default SideMenu;

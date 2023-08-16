import { useContext, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";

import SearchIcon from "../../assets/icons-search.svg"

const Form = ({ id, idBtn }) => {
  const { inputFilter } = useContext(PokemonContext);

  const [form, setForm] = useState("");

  const HandleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      inputFilter(form);
    }
  };

  return (
    <form
      className="Form"
      onSubmit={(ev) => {
        ev.preventDefault();
        inputFilter(form);
      }}
    >
      <input
        className="Form__Input"
        id={`inputSearch${id}`}
        type="search"
        name="search"
        onChange={(ev) => {
          setForm(ev.target.value);
        }}
        value={form}
        placeholder="Search pokemon"
        autoComplete="off"
        onKeyDown={HandleKeyDown}
      />

      <span className="Form__Info">Press 'Enter' to search pokemons</span>
      <button id={`Form__Btn${idBtn}`} type="submit" className="Form__Btn">
        <img src={SearchIcon} />
      </button>

    </form>
  );
};

export default Form;

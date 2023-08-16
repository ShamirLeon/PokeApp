import { useContext, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";

const Form = ({id}) => {
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
    </form>
  );
};

export default Form;

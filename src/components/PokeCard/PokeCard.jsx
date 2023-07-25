import mewtwo from "../../assets/pokemon-mewtwo.png";

const PokeCard = () => {
  return (
    <div className="PokeCard">
      <div className="PokeCard__Circles PokeCard__Circles--left">
        <span>2.3m</span>
      </div>
      <div className="PokeCard__Circles PokeCard__Circles--right">
        <span>127Kg</span>
      </div>
      <span className="PokeCard__Number">#150</span>
      <img src={mewtwo} alt="" className="PokeCard__Img" />
      <h2 className="PokeCard__Name">Mewtwo</h2>
      <h3 className="PokeCard__Type">Psychic</h3>
    </div>
  );
};

export default PokeCard;

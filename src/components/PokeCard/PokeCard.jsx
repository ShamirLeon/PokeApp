const PokeCard = ({
  height,
  weight,
  number,
  name,
  type1,
  type2 = null,
  img,
}) => {
  const isValidNumberLength = number.length > 2;

  return (
    <div className="PokeCard">
      <div className="PokeCard__Circles PokeCard__Circles--left">
        <span>{height}m</span>
      </div>
      <div className="PokeCard__Circles PokeCard__Circles--right">
        <span>{weight}kg</span>
      </div>
      <span
        style={{ fontSize: isValidNumberLength ? "75px" : "" }}
        className="PokeCard__Number"
      >
        #{number}
      </span>
      <img src={img} alt={`Pokemon ${name}`} className="PokeCard__Img" />
      <h2 className="PokeCard__Name">{name}</h2>
      <div className="PokeCard__Texts">
        <h3 className={`PokeCard__Type ${type1}`}>{type1}</h3>
        <h3 className={`PokeCard__Type ${type2}`}>{type2}</h3>
      </div>
    </div>
  );
};

export default PokeCard;

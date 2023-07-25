import InfoItem from "./InfoItem";

const PokeInfo = ({
  speed,
  specialDefense,
  specialAttack,
  Defense,
  Attack,
  Hp,
}) => {
  return (
    <div className="Info__List">
      <InfoItem text={"Speed"} value={speed} />
      <InfoItem text={"Special Defense"} value={specialDefense} />
      <InfoItem text={"Special Attack"} value={specialAttack} />
      <InfoItem text={"Defense"} value={Defense} />
      <InfoItem text={"Attack"} value={Attack} />
      <InfoItem text={"Hp"} value={Hp} />
    </div>
  );
};

export default PokeInfo;

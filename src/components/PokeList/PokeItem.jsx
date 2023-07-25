import StarIcon from "../../assets/Star";
import PokeCard from "../PokeCard/PokeCard";
import PokeInfo from "../PokeInfo/PokeInfo";

const PokeItem = (params) => {
  return (
    <div className="PokeItem">
      <PokeCard />
      <PokeInfo />
      <StarIcon className="PokeItem__Star"/>
    </div>
  );
};

export default PokeItem;

import PikachuLoader from "../../assets/pika.gif";

const Loader = (params) => {
  return (
    <div className="Loader">
      <img src={PikachuLoader} />
      <span>Cargando...</span>
    </div>
  );
};

export default Loader;

import Logo from "../../assets/Pokédex_logo.png";
import StarIcon from "../../assets/Star";

const Navigation = (params) => {
  return (
    <header>
      <nav className="Navigation">
        <img src={Logo} alt="" className="Navigation__Logo" />
        <div className="Navigation__Submenu">
          <input type="text" placeholder="Search pokemon" />
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

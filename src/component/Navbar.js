import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ darkC, TurnOnDarkM }) => {
  return (
    <header className={`navbar${darkC}`}>
      <Link to="/" className="title">
        Where in the world?
      </Link>
      <div className="switcher" onClick={TurnOnDarkM}>
        <BsMoon className="icon" />
        <p className="label">Dark Mood</p>
      </div>
    </header>
  );
};

export default Navbar;

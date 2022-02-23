import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const ActionField = ({ darkC }) => {
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState("");

  function ShowRegion() {
    setShow(!show);
    if (!show) {
      setShowOptions("__Show");
    } else {
      setShowOptions("");
    }
  }

  return (
    <div className={`action${darkC}`}>
      <div className="search">
        <BsSearch className="search__icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter">
        <div className="filter__show">
          <p className="label">Filter By Region</p>
          {show && <RiArrowDropUpLine className="icon" onClick={ShowRegion} />}
          {!show && (
            <RiArrowDropDownLine className="icon" onClick={ShowRegion} />
          )}
        </div>
        <div className={`option${showOptions}`}>
          <Link to="">Africa</Link>
          <Link to="">America</Link>
          <Link to="">Asai</Link>
          <Link to="">Europe</Link>
          <Link to="">Oseania</Link>
        </div>
      </div>
    </div>
  );
};

export default ActionField;

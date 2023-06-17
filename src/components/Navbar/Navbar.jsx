import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="layout__menu">
      <ul className="menu__list">
        <li className="menu__option">
          <Link to="/" className="menu__link">
            <FontAwesomeIcon icon={faHouse} className="menu__icon" />
            <span className="menu__overlay">Home</span>
          </Link>
        </li>

        <li className="menu__option">
          <Link to="/about" className="menu__link">
            <FontAwesomeIcon icon={faUserTie} className="menu__icon" />
            <span className="menu__overlay">About Me</span>
          </Link>
        </li>

        <li className="menu__option">
          <Link to="/education" className="menu__link">
            <FontAwesomeIcon icon={faGraduationCap} className="menu__icon" />
            <span className="menu__overlay">Education</span>
          </Link>
        </li>

        <li className="menu__option">
          <Link to="/portfolio" className="menu__link">
            <FontAwesomeIcon icon={faBriefcase} className="menu__icon" />
            <span className="menu__overlay">Portfolio</span>
          </Link>
        </li>

        <li className="menu__option">
          <Link to="/contact" className="menu__link Link">
            <FontAwesomeIcon icon={faEnvelope} className="menu__icon" />
            <span className="menu__overlay">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <div className="user_info__links">
      <ul className="links__social">
        <li className="social__option">
          <a
            href="https://www.linkedin.com/in/angel-carrasco24/"
            target="_blank"
            rel="noreferrer"
            className="social__link"
          >
            <FontAwesomeIcon className="social__icon" icon={faLinkedin} />
          </a>
        </li>

        <li className="social__option">
          <a
            href="https://github.com/acarrascocesa/"
            target="_blank"
            rel="noreferrer"
            className="social__link"
          >
            <FontAwesomeIcon className="social__icon" icon={faGithub} />
          </a>
        </li>

        <li className="social__option">
          <a
            href="https://www.instagram.com/josecesa25/"
            target="_blank"
            rel="noreferrer"
            className="social__link"
          >
            <FontAwesomeIcon className="social__icon" icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

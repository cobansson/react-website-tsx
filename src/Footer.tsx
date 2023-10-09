import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Powered by <FontAwesomeIcon icon={faReact} className="react-logo" spin/>{" "}
        <FontAwesomeIcon icon={faJsSquare} className="js-logo"/>
      </p>
    </div>
  );
}

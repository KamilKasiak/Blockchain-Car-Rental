import "./Navbar.scss";
import metamaskLogo from "../assets/metamask.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left">
          <Link to="/" className="left-logo">
            logo
          </Link>{" "}
        </div>
        <div className="middle"></div>
        <div className="right">
          <img src={metamaskLogo}></img>
          <p>connect wallet</p>
        </div>
      </div>
    </div>
  );
}

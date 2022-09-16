import "./Navbar.scss";
import metamaskLogo from "../assets/metamask.png";

export default function () {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="left">logo</div>
        <div className="middle"></div>
        <div className="right">
          <img src={metamaskLogo}></img>
          <p>connect metamask</p>
        </div>
      </div>
    </div>
  );
}

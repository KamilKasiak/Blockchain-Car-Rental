import "./Navbar.scss";
import metamaskLogo from "../assets/metamask.png";
import { Link } from "react-router-dom";
import ethereum from "../assets/ethereum.png";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='left'>
          <Link to='/' className='left-logo'>
            <img className='logo-img' src={ethereum} />
          </Link>
        </div>
        <div className='middle'></div>
        <div className='right'>
          <img src={metamaskLogo} alt='log'></img>
          <p>connect wallet</p>
        </div>
      </div>
    </div>
  );
}

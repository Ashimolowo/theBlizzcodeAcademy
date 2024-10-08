import { Link } from "react-router-dom";
import './navbar.css';
import 'boxicons/css/boxicons.min.css';
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const linkAction = () => {
    setIsNavVisible(false);
  };

  return (
    <nav className="nav ">
      <div className="nav__toggle" onClick={toggleNav}>
        <i className="bx bxs-grid"></i>
      </div>

      <Link className="logo libre-baskerville-bold" to="/">
        <h1>Blizzcode Logo</h1>
      </Link>

      <ul id="ul" className={isNavVisible ? 'show' : ''}>
      
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/">Home</Link>
        </li>
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/events">Events</Link>
        </li>
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/programs">Programs</Link>
        </li>
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/areadyauser">Already a user?</Link>
        </li>
        <li className="libre-baskerville-regular" onClick={linkAction}>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

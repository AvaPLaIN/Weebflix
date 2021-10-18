import { useState } from 'react';
import { NavbarComponent } from './Navbar.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/weebflix.png';
import { GoogleLogout } from 'react-google-login';

function Navbar({ user, setUser, logout }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset ? true : false);
    return () => (window.onscroll = null);
  };

  return (
    <NavbarComponent isScrolled={isScrolled}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="logo" />
          <ul>
            <li>Startseite</li>
            <li>Animes</li>
            <li>Filme</li>
            <li>Mangas</li>
            <li>Neu und beliebt</li>
            <li>Meine Liste</li>
          </ul>
        </div>
        <div className="right">
          <Link to="/search" className="linkSearch">
            <FontAwesomeIcon icon={faSearch} />
            <span>Suchen</span>
          </Link>
          <FontAwesomeIcon icon={faBell} className="news" />
          <div
            className="profile"
            onMouseEnter={() => {
              setIsProfileOpen(true);
            }}
            onMouseLeave={() => {
              setIsProfileOpen(false);
            }}
          >
            <img
              src="https://i.pinimg.com/originals/e6/71/0e/e6710edcae862c162621f06e434f0172.jpg"
              alt="avatar"
            />
            <FontAwesomeIcon
              className={isProfileOpen ? 'fa-rotate-180' : ''}
              icon={faCaretDown}
            />
            <div className="options">
              <label className="switch">
                <input type="checkbox" id="togBtn" />
                <div className="slider round"></div>
              </label>
              <span>Einstellungen</span>
              <GoogleLogout
                clientId="174070686882-v2sgqaplluhhde3scogm6cqss8cu5u9i.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </div>
          </div>
        </div>
      </div>
    </NavbarComponent>
  );
}

export default Navbar;

import { useState } from 'react';
import { NavbarComponent } from './Navbar.styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCaretDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/weebflix.png';
import { GoogleLogout } from 'react-google-login';

function Navbar({ user, setUser, logout }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset ? true : false);
    return () => (window.onscroll = null);
  };

  return (
    <NavbarComponent
      isScrolled={isScrolled}
      isMobileMenuOpen={isMobileMenuOpen}
    >
      <div className="container">
        <div className="left">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <ul>
            <Link to="/home">Homepage</Link>
            <Link to="/home">Animes</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/rating">Rating</Link>
            <Link to="/mylist">My List</Link>
          </ul>
        </div>
        <div className="right">
          <Link to="/search" className="linkSearch">
            <FontAwesomeIcon icon={faSearch} />
            <span>Search</span>
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
              <span>{user?.data?.result?.name || user?.profileObj?.name}</span>
              <Link to="/movies">Movies</Link>
              <Link to="/rating">Rating</Link>
              <Link to="/mylist">My List</Link>
              <label className="switch">
                <input type="checkbox" id="togBtn" />
                <div className="slider round"></div>
              </label>
              <span>Settings</span>
              <GoogleLogout
                clientId="174070686882-v2sgqaplluhhde3scogm6cqss8cu5u9i.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button onClick={renderProps.onClick} className="logout">
                    Logout
                  </button>
                )}
                buttonText="Logout"
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </div>
          </div>
          <div className="mobileBar" onClick={() => setIsMobileMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div className="mobileMenu">
        <button
          className="closeMobileMenuBtn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="container">
          <h1>Weebflix</h1>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/home">
            Home
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/movies">
            Movies
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/rating">
            Rating
          </Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/mylist">
            My List
          </Link>
          <GoogleLogout
            onClick={() => setIsMobileMenuOpen(false)}
            clientId="174070686882-v2sgqaplluhhde3scogm6cqss8cu5u9i.apps.googleusercontent.com"
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="logoutMobile">
                Logout
              </button>
            )}
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      </div>
    </NavbarComponent>
  );
}

export default Navbar;

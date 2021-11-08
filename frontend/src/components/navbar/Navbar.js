//! IMPORT LIBRARIES
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faCaretDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

//! IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/ducks/user';

//! IMPORT COMPONENTS
import { NavbarComponent } from './Navbar.styled';

//! IMPORT ASSETS
import logo from '../../assets/weebflix.png';

const Navbar = () => {
  //! INIT
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  //! USE-STATE
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //! HANDLER
  const handleLogout = () => {
    dispatch(logoutUser());
  };
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
              <span>{user?.user?.username}</span>
              <Link to="/movies">Movies</Link>
              <Link to="/rating">Rating</Link>
              <Link to="/mylist">My List</Link>
              <label className="switch">
                <input type="checkbox" id="togBtn" />
                <div className="slider round"></div>
              </label>
              <span>Settings</span>
              <button onClick={handleLogout} className="logout">
                Logout
              </button>
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
          <button onClick={handleLogout} className="logoutMobile">
            Logout
          </button>
        </div>
      </div>
    </NavbarComponent>
  );
};

export default Navbar;

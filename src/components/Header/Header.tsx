import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Menu from '../Menu/Menu';
import Hamburger from '../Hamburger/Hamburger';
import MenuMobile from '../MenuMobile/MenuMobile';
import logo from '../../images/forkhive_logo.jpeg'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const darkMode = useSelector((state: RootState) => {
    return state.darkMode.darkMode
  }); // Accessing darkMode from Redux store


  return (
    <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="Figurit Homepage" src={logo} />
            {/* <h2 style={{ color: '#EBA937'}}>Forkhive</h2> */}
          </Link>
        </div>
        <div className="logo-mobile">
          <Link to="/">
            <img alt="Figurit Homepage" src={logo} style={{ height: '55px', width: '100px' }} />
          </Link>
        </div>
        <MenuMobile active={menuActive} />
        <Menu />
        <Hamburger toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;

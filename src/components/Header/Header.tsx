import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Menu from '../Menu/Menu';
import Hamburger from '../Hamburger/Hamburger';
import MenuMobile from '../MenuMobile/MenuMobile';
import forkhive_logo_dark_bg from '../../images/forkhive_logo_dark_bg.jpg'
import forkhive_logo_white_bg from '../../images/forkhive_logo_white_bg.png'
import ng from '../../images/forkhive_logo_f2f7f8_bg.png'
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
            {
              darkMode === true ? 
              (<img alt="Figurit Homepage" src={forkhive_logo_dark_bg} style={{ height: '50px', width: '100px' }} />) 
              : <img alt="Figurit Homepage" src={ng} style={{ height: '55px', width: '100px' }} />
            }
            {/* <h2 style={{ color: '#EBA937'}}>Forkhive</h2> */}
          </Link>
        </div>
        <div className="logo-mobile">
          <Link to="/">
            {
              darkMode === true ? 
              (<img alt="Figurit Homepage" src={forkhive_logo_dark_bg} style={{ height: '50px', width: '100px' }} />) 
              : <img alt="Figurit Homepage" src={ng} style={{ height: '55px', width: '100px' }} />

            }

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

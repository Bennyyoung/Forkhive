import React, { useState } from 'react';
import { Link } from 'gatsby';
import Menu from '../Menu/Menu';
import Hamburger from '../Hamburger/Hamburger';
import MenuMobile from '../MenuMobile/MenuMobile';
import logo from '../../images/forkhive_logo.jpeg'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="Figurit Homepage" src={logo} />
            {/* <h2 style={{ color: '#EBA937'}}>Forkhive</h2> */}
          </Link>
        </div>
        <div className="logo-mobile">
          <Link to="/">
            <img alt="Figurit Homepage" src={logo} style={{ height: '55px', width: '58px' }} />
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

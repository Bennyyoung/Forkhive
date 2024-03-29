import React, { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


interface HamburgerProps {
  toggleMenu: (active: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleToggle = () => {
    setHamburgerActive((prevHamburgerActive) => !prevHamburgerActive);
    toggleMenu(!hamburgerActive);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '8rem', alignItems: 'flex-end' }}>
      <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <LanguageSwitcher />
        <DarkModeToggle />
      </div>
      <button
        id="toggle-main-menu-mobile"
        className={`hamburger hamburger--slider ${hamburgerActive ? 'is-active' : ''}`}
        type="button"
        onClick={handleToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
  );
};

export default Hamburger;

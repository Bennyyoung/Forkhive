import React, { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';


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
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '4.1rem', alignItems: 'flex-end' }}>
      <div>

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

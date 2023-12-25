import React, { useState } from 'react';

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
  );
};

export default Hamburger;

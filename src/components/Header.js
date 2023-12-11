import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import MenuMobile from './MenuMobile';
import logo from '../images/forkhive_logo.jpeg'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
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
            <img alt="Figurit Homepage" src={logo} style={{height: '55px', width: '58px'}} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;

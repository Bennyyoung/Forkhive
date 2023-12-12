import React, { ReactNode } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import '../scss/style.scss';

interface ILayout {
  bodyClass?: string;
  children: ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <Footer />
        <SubFooter />
      </div>
    </>
  );
};

export default Layout;

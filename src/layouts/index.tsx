import React, { ReactNode, createContext } from 'react';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SubFooter from '../components/SubFooter/SubFooter';
import '../scss/style.scss';
// import "bootstrap/dist/css/bootstrap.min.css";

interface ILayout {
  bodyClass?: string;
  children: ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <>
      <SEO meta={[]} keywords={[]} />
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

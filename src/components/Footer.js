import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-plugin-transition-link';
import logo from '../images/BloomHub💻 20200419_152923.jpg'
import Socials from './Socials';

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
          <Link to="/">
            <img alt="Figurit Homepage" src={logo} style={{height: '55px', width: '58px'}} />
          </Link>
            <ul className="footer-menu">
              <li>
                {' '}
                <Link style={{textDecoration: 'none'}} to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link style={{textDecoration: 'none'}} to="/contact">Contact</Link>
              </li>
              <li className="copyright">
                ©{' '}{new Date().getFullYear()}{' '}{props.data.site.siteMetadata.title}
              </li>
              <Socials />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);

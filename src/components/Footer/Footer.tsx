import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// @ts-ignore
import Link from 'gatsby-plugin-transition-link';
import logo from '../../images/forkhive_logo.jpeg'
import Socials from '../Socials/Socials';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer">
              <Link to="/">
                <img alt="Figurit Homepage" src={logo} style={{ height: '3rem', width: '7rem' }} />
              </Link>
              <ul className="footer-menu">
                <li>
                  {' '}
                  <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                </li>
                <li>
                  {' '}
                  <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                </li>
                <li className="copyright" style={{ fontSize: '13px' }}>
                  ©{' '}{new Date().getFullYear()}{' '}{data.site.siteMetadata.title}. All rights reserved
                </li>
                <Socials />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';

interface MenuLinks {
  name: string
  link: string
}

const Menu = () => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }`)
  const { menuLinks } = data.site.siteMetadata || { menuLinks : []};
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map((link: MenuLinks) => (
          <li key={link.name}>
            <Link to={link.link} activeClassName={link.name}><Trans>{link.name}</Trans></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu
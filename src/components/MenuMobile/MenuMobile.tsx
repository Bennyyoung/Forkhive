import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

interface IMenuMobile {
  active: boolean
}

interface MenuLinks {
  name: string
  link: string
}

const MenuMobile: React.FC<IMenuMobile> = props => {
  const data = useStaticQuery(graphql`
    query MenuMobileQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const { menuLinks } = data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map((link: MenuLinks) => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile


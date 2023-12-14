import React from 'react';
import { graphql, StaticQuery, Link, PageProps } from 'gatsby';

interface MenuLinks {
  name: string
  link: string
}

interface SiteMetadata {
  menuLinks: MenuLinks[]
}

interface SiteData {
  site: {
    siteMetadata: SiteMetadata
  }
}

interface IMenu extends PageProps {
  data: SiteData
}

const Menu: React.FC<IMenu> = (props) => {
  const { menuLinks } = props.data.site.siteMetadata || { menuLinks : []};
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map((link: MenuLinks) => (
          <li key={link.name}>
            <Link to={link.link} activeClassName={link.name}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default (props: PageProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(queryData: SiteData) => <Menu data={queryData} {...props} />}
  />
);

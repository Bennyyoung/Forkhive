import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import FORKHIVEblack from '../../images/FORKHIVE-black2.png'

interface ISEO {
  title?: string;
  lang?: string;
  meta: Array<{ name: string; content: string }>
  keywords: string[]
}

const SEO: React.FC<ISEO> = props => {
  const data = useStaticQuery(detailsQuery)

  const title = props.title || data.site.siteMetadata.title

  return (
    <>
      <Helmet>
        {/* data.site.siteMetadata.title */}
        <title>{`${title}`}</title>
        <link rel="icon" href={FORKHIVEblack} type="image/png" sizes="36x36" />
      </Helmet>

    </>
  )
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

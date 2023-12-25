import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

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
    <Helmet
      htmlAttributes={{
        lang: props.lang || 'en',
      }}
      title={title}
      titleTemplate={`%s - ${data.site.siteMetadata.title}`}
    />
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

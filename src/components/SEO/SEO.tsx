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
  const { meta, keywords } = props

  const title = props.title || data.site.siteMetadata.title

  const metaTitle = title || data.site.siteMetadata.title;
  const metaDescription = "We are a dynamic Software Development Company with a primary emphasis on Frontend Development. Our passion for innovation drives us to explore and expand into cutting-edge fields such as Data Science, Artificial Intelligence, and Machine Learning.";

  return (
    <>
      <Helmet
        title={metaTitle}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: `keywords`,
            content: keywords.join(`, `),
          },
          ...meta,
        ]}

      >
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

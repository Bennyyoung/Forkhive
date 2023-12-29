import React from 'react';
import { graphql, PageProps } from 'gatsby';
import SEO from '../components/SEO/SEO';
import Layout from '../layouts/index';
import { Trans } from 'gatsby-plugin-react-i18next';

interface ServiceProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const Service: React.FC<ServiceProps> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const stringWithPTags = html.toString();

const stringWithoutPTags = stringWithPTags.replace(/<\/?p>/g, '');



  return (
    <Layout bodyClass="page-service">
      <SEO title={title} meta={[]} keywords={[]} />
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="service service-single">
                <h1 className="title"><Trans>{title}</Trans></h1>
                <div className="content"><Trans>{stringWithoutPTags}</Trans></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String! $id: String! ) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }

    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default Service;

import React from 'react';
import { graphql, PageProps } from 'gatsby';
import SEO from '../components/SEO/SEO';
import Layout from '../layouts/index';
import { Trans } from 'gatsby-plugin-react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

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
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)

  const { html } = data.markdownRemark;
  const stringWithPTags = html.toString();

const stringWithoutPTags = stringWithPTags.replace(/<\/?p>/g, '');



  return (
    <Layout bodyClass="page-service">
      <SEO title={title} meta={[]} keywords={[]} />
      <div className={`strip strip-white strip-diagonal ${darkMode ? 'dark-mode' : ''}`}>
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="container col-12 col-md-8">
              <div className="container service service-single">
                <h1><Trans>{title}</Trans></h1>
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

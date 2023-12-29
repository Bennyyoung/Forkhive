import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/index';
import { Trans } from 'gatsby-plugin-react-i18next';

interface ITeam extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const Team: React.FC<ITeam> = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const stringWithPTags = html.toString();

const stringWithoutPTags = stringWithPTags.replace(/<\/?p>/g, '');
console.log('stringWithoutPTags', stringWithoutPTags)
console.log('html', html)

  return (
    <Layout bodyClass="page-team">
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="team">
                <h1 className="title"><Trans>{title}</Trans></h1>
                {/* <div className="content" dangerouslySetInnerHTML={{ __html: html }} /> */}
                <div className="content"><p><Trans>{stringWithoutPTags}</Trans></p></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`;

export default Team;

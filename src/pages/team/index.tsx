import React from 'react';
import { graphql, PageProps } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Trans } from 'gatsby-plugin-react-i18next';

interface ITeam extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          html: string
          frontmatter: {
            title: string
            path: string
            image: string
            jobtitle: string
            subtitle: string
            linkedinurl: string
            twitterurl: string
            email: string
          }
        }
      }>
    }
  }
}

const Team: React.FC<ITeam> = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)
  console.log('teams ', teams )
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" meta={[]} keywords={[]} />
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1><Trans>Our Team</Trans></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                    <ul className="card-meta">
                      <li style={{ paddingBottom: '4px' }}>
                        <span className={`${darkMode ? 'dark-mode': ''}`} style={{ fontWeight: '510' }}><Trans>{edge.node.frontmatter.jobtitle}</Trans></span>
                        {/* <span style={{ fontWeight: '210' }}>{edge.node.frontmatter.subtitle}</span> */}
                      </li>
                      <li style={{ paddingBottom: '4px' }}>
                        <span style={{ fontWeight: '210' }}><Trans>{edge.node.frontmatter.subtitle}</Trans></span>
                      </li>
                      <li className={`${darkMode ? 'dark-mode': ''}`} style={{ paddingBottom: '4px' }}><b>LinkedIn:</b>
                        <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                          <Trans>{edge.node.frontmatter.linkedinurl}</Trans>
                        </a>
                      </li>
                      <li className={`${darkMode ? 'dark-mode': ''}`} style={{ paddingBottom: '4px' }}><b>Twitter:</b>
                        <a target="_blank" href={edge.node.frontmatter.twitterurl}>
                          <Trans>{edge.node.frontmatter.twitterurl}</Trans>
                        </a>
                      </li>
                      <li className={`${darkMode ? 'dark-mode': ''}`}><b><Trans>Email</Trans>:</b>
                        <a href={`mailto: ${edge.node.frontmatter.email}`}><Trans>{edge.node.frontmatter.email}</Trans></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="team-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}

                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { frontmatter: { date: DESC }}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
            subtitle
            linkedinurl
            twitterurl
            email
          }
        }
      }
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

export default Team;

import React from 'react';
import { graphql, PageProps } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Tooltip } from "react-tooltip";


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
  console.log('teams ', teams)
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
        {/* <h4><Trans>Internal Team</Trans></h4> */}
        <div style={{ textAlign: 'center' }} className='grid-container'>
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="container col-12 col-md-6 mb-1">
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-header-left" >
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <a target="_blank" href={edge.node.frontmatter.linkedinurl} style={{textDecoration: 'none'}}>
                          <img
                            alt={edge.node.frontmatter.title}
                            className="img-fluid mb-2"
                            src={edge.node.frontmatter.image}
                          /><br />
                          <ul className="card-meta">
                            <li style={{ paddingBottom: '4px' }}>
                              <span className={`${darkMode ? 'dark-mode' : ''}`} style={{ fontWeight: '510' }}>{edge.node.frontmatter.jobtitle}</span>
                              {/* <span style={{ fontWeight: '210' }}>{edge.node.frontmatter.subtitle}</span> */}
                            </li>
                            {/* <li style={{ paddingBottom: '4px' }}>
                            <span style={{ fontWeight: '210' }}>{edge.node.frontmatter.subtitle}</span>
                          </li> */}
                            {/* <li className={`${darkMode ? 'dark-mode' : ''}`} style={{ paddingBottom: '4px' }}><b>LinkedIn:</b>
                            <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                              {edge.node.frontmatter.linkedinurl}
                            </a>
                          </li>
                          <li className={`${darkMode ? 'dark-mode' : ''}`} style={{ paddingBottom: '4px' }}><b>Twitter:</b>
                            <a target="_blank" href={edge.node.frontmatter.twitterurl}>
                              {edge.node.frontmatter.twitterurl}
                            </a>
                          </li>
                          <li className={`${darkMode ? 'dark-mode' : ''}`}><b>Email:</b>
                            <a href={`mailto: ${edge.node.frontmatter.email}`}>{edge.node.frontmatter.email}</a>
                          </li> */}
                          </ul>
                        </a>
                      </div>
                    )}
                  </div>

                </div>
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

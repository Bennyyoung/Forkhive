import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';



const Team = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Team</h1>
              <p style={{wordSpacing: '0.2rem'}}>
                Meet our team of Developers, AI Engineers, ML Engineers, Data Scienists and others.
              </p>
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
                      <li style={{paddingBottom: '4px'}}>
                        <span style={{fontWeight: '510', color: 'gray'}}>{edge.node.frontmatter.jobtitle}</span>
                      </li>
                      <li style={{paddingBottom: '4px'}}><b>LinkedIn:</b> 
                        <a target="_blank" href={edge.node.frontmatter.linkedinurl}>
                          {edge.node.frontmatter.linkedinurl}
                        </a>
                      </li>
                      <li style={{paddingBottom: '4px'}}><b>Twitter:</b>
                        <a target="_blank" href={edge.node.frontmatter.twitterurl}>
                          {edge.node.frontmatter.twitterurl}
                        </a>
                      </li>
                      <li style={{paddingBottom: '4px'}}> 
                        <a target="_blank" href={edge.node.frontmatter.githuburl}>
                          {edge.node.frontmatter.githuburl}
                        </a>
                      </li>
                      <li><b>Email:</b>
                        <a href={`mailto: ${edge.node.frontmatter.email}`}>{edge.node.frontmatter.email}</a>
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
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
            linkedinurl
            twitterurl
            githuburl
            email
          }
        }
      }
    }
  }
`;

export default Team;

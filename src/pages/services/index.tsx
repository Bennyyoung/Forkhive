import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import Layout from '../../layouts/index';

interface IServices extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          excerpt: string
          frontmatter: {
            title: string
            path: string
          }
        }
      }>
    }
  }
}

const Services: React.FC<IServices> = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" meta={[]} keywords={[]} />
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {services.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-md-4 col-2 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h5 style={{fontWeight: 'bold'}}>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h5>
                  <p style={{wordSpacing: '0.2rem'}}>{edge.node.excerpt}</p>
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
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { frontmatter: { date: DESC }}
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Services;

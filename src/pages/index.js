import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import TeckStack from '../components/TechStack'
import Plans from '../components/WebsitePlans/Plans';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;

    return(
      <Layout bodyClass="page-home">
        <SEO title="Home" />
        <Helmet>
          <meta
            name="BLOOM"
            content="We specalize in Web development and Web design, Artificial Intelligence, Machine Learning and lastly Data Science"
          />
        </Helmet>
        <div className="intro pb-4">
          <div className="container">
            <h2 style={{ marginTop: '-150px', color: 'blue', fontSize: '2rem', fontWeight: 'bold' }}>BloomHub</h2>
            <h5 style={{ fontStyle: 'italic', color: 'blue', fontSize: '16px', fontWeight: 'bold' }}>Innovating Africa</h5>
            <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}>
              We specalize in Web and Mobile App Development, Web and Mobile App Design, Artificial Intelligence, Machine Learning and Data Science
          </p>
          </div>
        </div>

        <div className="container pt-2">
          <Call button />
        </div>

        <div className="container pt-8 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12">
              <h2 className="title-3 text-dark mb-3" style={{ textAlign: "center" }}><strong>Our Services</strong></h2>
            </div>
            {markdown.map(edge => (
              <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
                <div className="card service">
                  <div className="card-content">
                    <h5 style={{fontWeight: 'bold'}}>
                      <Link style={{textDecoration: 'none'}} to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                    </h5>
                    <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}>{edge.node.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 text-center">
              <TeckStack />
            </div>


            <div className="col-12 text-center">
              <Link className="button button-primary mt-2" to="/services">
                View All Services
            </Link>
            </div>
          </div>
        </div>

        <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="title-3 text-dark mb-4" style={{ textAlign: "center" }}><strong>Our Features</strong></h2>
            </div>

            {/* Everything in our features could be found in the data/features.json */}
            {json.map(edge => (
              <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                <div className="feature" style={{ color: "black" }}>
                  {edge.node.image && (
                    <div className="feature-image">
                      <img src={withPrefix(edge.node.image)} />
                    </div>
                  )}
                  <h2 className="feature-title">{edge.node.title}</h2>
                  <div style={{ justifyContent: 'center', wordSpacing: '0.2rem' }} className="feature-content">{edge.node.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 text-center">

        </div>
        <Plans />
      </Layout>
    );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
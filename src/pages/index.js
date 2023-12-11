import React, {useEffect} from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';

import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import TeckStack from
 '../components/TechStack'

import MessengerCustomerChat from 'react-messenger-customer-chat';
import ReactGa from 'react-ga'

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;

  useEffect(() => {
    ReactGa.initialize('G-7TJLF1LZS2')

    // To report page view
    ReactGa.pageview(window.location.pathname + window.location.search)

  },[])


  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="Forkhive"
          content=" We are a Software Company, focused on Development (Web and Mobile), Design (Web and Mobile) and Data Science (AI and ML) to help build your startup ideas and team."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h2 style={{ marginTop: '-145px', color: '#EBA937', fontSize: '2rem', fontWeight: 'bold' }}>Forkhive</h2>
          <h5 style={{ fontStyle: 'italic', color: '#EBA937', fontSize: '16px', fontWeight: 'bold' }}>Innovating African businesses</h5>
          <p style={{ marginBottom: "-5px", fontSize: '16px', justifyContent: 'center', wordSpacing: '0.2rem' }}>
            We are a Software Company, focused on Development <b>(Web and Mobile)</b>, Design <b>(Web and Mobile)</b> and Data Science <b>(AI and ML)</b> to help build your startup ideas and team.
          </p>
        </div>
      </div>

      <div className="container pb-0">
        <Call button />
      </div>

      <div style={{ padding: "10px 0px 0 0px" }}>
        <div className="text-center" style={{ display: "inline-block", width: "35%" }}>
          <h2><strong>Our Works</strong></h2>
          <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}>Look at our exceptional works</p>
          <Link className="button button-primary mt-2" to="/our-works">
            Our Works
          </Link>
        </div>
        <div className="text-center" style={{ display: "inline-block", width: "30%" }}>
          <h2><strong>Pricing</strong></h2>
          <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}>Pricing built for businesses of all sizes</p>
          <Link className="button button-primary mt-2" to="/pricing">
            Pricing
          </Link>
        </div>
        <div className="text-center" style={{ display: "inline-block", width: "35%" }}>
          <h2><strong>Career</strong></h2>
          <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}>The most needed skill right now</p>
          <Link className="button button-primary mt-2" to="/career">
            Career
          </Link>
        </div>

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
                  <h5 style={{ fontWeight: 'bold' }}>
                    <Link style={{ textDecoration: 'none' }} to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
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
            <MessengerCustomerChat
              pageId="107730554053669"
              appId="281696259640056"
            />
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
import React, { useContext, useEffect } from 'react';
import { graphql, withPrefix, PageProps } from 'gatsby';
import Helmet from 'react-helmet';

import SEO from '../components/SEO/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call/Call';
import TeckStack from '../components/TechStack/TechStack'
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Provider, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import ReactGa from 'react-ga'
import { Trans, Link } from 'gatsby-plugin-react-i18next';

interface IHome extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string;
          frontmatter: {
            path: string;
            title: string;
            date: string;
          }
          excerpt: string
        }
      }>
    },
    allFeaturesJson: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          description: string;
          image: string;
        }
      }>
    }
  }
}

console.log('Trans', Trans)

const Home: React.FC<IHome> = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode); // Accessing darkMode from Redux store

  useEffect(() => {
    ReactGa.initialize('G-7TJLF1LZS2')

    // To report page view
    ReactGa.pageview(window.location.pathname + window.location.search)

  }, [])


  return (

    <Layout bodyClass="page-home">

      <SEO title="Home" meta={[]} keywords={[]} />
      <Helmet>
        <meta
          name="Forkhive"
          content="We are a Software Company, focused on Frontend Development (Web and Mobile), Design (Web and Mobile) and Data Science (AI and ML) to help build your startup ideas and team."
        />
      </Helmet>
      <div className={`intro ${darkMode ? 'dark-mode' : ''} intro-small`}>
        <div className="container">
          <h2 style={{ color: '#EBA937', fontSize: '2rem', fontWeight: 'bold' }}><Trans>Forkhive</Trans></h2>
          <h5 style={{ fontStyle: 'italic', color: '#EBA937', fontSize: '16px', fontWeight: 'bold' }}><Trans>Innovating African businesses</Trans></h5>
          <p style={{ marginBottom: "-5px", fontSize: '16px', justifyContent: 'center', wordSpacing: '0.2rem' }}>
            <Trans>
              We are a Software Development Company, primarily focused on Frontend Web Development.
            </Trans>
          </p>
        </div>
      </div>

      <div className="container pb-0">
        <Call button={true} />
      </div>

      <div className='container mt-4'>
        <div className='row'>
          <div className="text-center col-md-4 col-2 mb-1 mt-1">
            <h2><strong><Trans>About</Trans></strong></h2>
            <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}>
              <Trans>Who we are</Trans>
            </p>
            <Link className="button button-primary mt-2" to="/about" placeholder={undefined}>
              <Trans>About</Trans>
            </Link>
          </div>
          <div className="text-center col-md-4 col-2 mb-1 mt-1">
            <h2><strong><Trans>Pricing</Trans></strong></h2>
            <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}><Trans>Pricing built for businesses of all sizes</Trans></p>
            <Link className="button button-primary mt-2" to="/pricing" placeholder={undefined}>
              <Trans>Pricing</Trans>
            </Link>
          </div>
          <div className="text-center col-md-4 col-2 mb-1 mt-1">
            <h2><strong><Trans>Team</Trans></strong></h2>
            <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}><Trans>Our team of Engineers</Trans></p>
            <Link className="button button-primary mt-2" to="/team" placeholder={undefined}>
              <Trans>Team</Trans>
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 mb-3" style={{ textAlign: "center" }}><strong><Trans>Our Services</Trans></strong></h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service">
                <div className="card-content">
                  <h5 style={{ fontWeight: 'bold' }}>
                    <Link style={{ textDecoration: 'none' }} to={edge.node.frontmatter.path} placeholder={undefined}><Trans>{edge.node.frontmatter.title}</Trans></Link>
                  </h5>
                  <p style={{ justifyContent: 'center', wordSpacing: '0.2rem' }}><Trans>{edge.node.excerpt}</Trans></p>
                </div>
              </div>
            </div>
          ))}



          <div className="col-12 text-center">
            <TeckStack />
          </div>


          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services" placeholder={undefined}>
              {/* View All Services */}
              <Trans>View All Services</Trans>
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 mb-4" style={{ textAlign: "center" }}><strong><Trans>Our Features</Trans></strong></h2>
            {/* <MessengerCustomerChat
              pageId="107730554053669"
              appId="281696259640056"
            /> */}
          </div>

          {/* Everything in our features could be found in the data/features.json */}
          {json.map(edge => (
            <div key={edge.node.id} className="col-md-4">
              <div className={`feature ${darkMode ? 'dark-mode' : ''}`}>
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title"><Trans>{edge.node.title}</Trans></h2>
                <div style={{ justifyContent: 'center', wordSpacing: '0.2rem' }} className="feature-content"><Trans>{edge.node.description}</Trans></div>
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
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { frontmatter: { date: DESC }}
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

export default Home;
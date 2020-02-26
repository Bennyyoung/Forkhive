import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import adobe_I from '../images/adobe_illustrator.jpg'
import adobe_p from '../images/adobe_photoshop.jpg'
import anaconda from '../images/anaconda.png'
import github from '../images/github.png'

import gatsby from '../images/gatsby.png'
import r from '../images/r_machinelearning.jpg'
import mern_stack from '../images/mern_stack1.jpg'
// import jam_stack from '../images/Jam_stack.jfif'
import react_native from '../images/react_native.jpg'
import python from '../images/python_ml.png'


const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
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
          <h2 style={{marginTop: '-150px', color: 'blue', fontSize: '2rem', fontWeight: 'bold'}}>BloomHub</h2>
          <h5 style={{fontStyle: 'italic', color: 'blue', fontSize: '16px', fontWeight: 'bold'}}>Innovating Africa</h5>
          <p style={{ justifyContent: 'center', wordSpacing: '0.2rem'}}>
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
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p style={{justifyContent: 'center', wordSpacing: '0.2rem'}}>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}


          <div>
          <h3 className="title-3 text-dark mb-3">Technology stacks and IDE's used</h3>

            <ul>
              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/javascript.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/sublime-text.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/visual-studio-code-2019.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/html-5.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/css3.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/linux.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/graphql.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/sass.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
              <img src="https://img.icons8.com/color/144/000000/adobe-illustrator.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/adobe-photoshop.png" />
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                {/* <img alt="Web Technologies" width="300px" height="150px" src={anaconda} /> */}
              </li>

              <li style={{display: 'inline', float: 'left', padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/github.png" />
              </li>

                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/r.png" />
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/mongodb.png" />
                
              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/python.png" />
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/npm.png" />
              </li>

              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/nodejs.png" />

              </li>
                
              <li style={{display: 'inline', float: 'left',padding: '0px 20px 5px 0px'}}>
                <img src="https://img.icons8.com/color/144/000000/react-native.png" />
              <div><br /></div>
              </li>
              
              <li style={{display: 'inline', float: 'left',padding: '43px 20px 5px 0px'}}>
                <img src={gatsby} width="120px" height="50px"/>
              </li>
            </ul>
            {/* <img alt="Web Technologies" src={jam_stack} width="1000px" /> */}
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
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>

            {/* Everything in our features could be found in the data/features.json */}

          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div style={{justifyContent: 'center', wordSpacing: '0.2rem'}} className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
          <p style={{textAlign: "center", fontWeight: "bold", wordSpacing: '0.2rem'}}>
            <a href="https://drive.google.com/file/d/1uGhAn4Oa8y9aZiU3jL8Fo4QTGs1AGDY2/view?usp=sharing" style={{color: "blue"}}>Request our quote to see our pricing</a></p>
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

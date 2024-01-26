import { PageProps, graphql } from 'gatsby';
import React from 'react'
import SEO from '../../components/SEO/SEO'
import Layout from '../../layouts/index'
import { Trans } from 'gatsby-plugin-react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IAbout extends PageProps {
    data: {
        allMarkdownRemark: {
            edges: Array<{
                node: {
                    excerpt: string
                    frontmatter: {
                        title: string
                    }
                }
            }>
        }
    }
}

const About: React.FC<IAbout> = (props) => {
    const about = props.data.allMarkdownRemark.edges;
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

    return (
        <Layout bodyClass="page-about">
            <SEO title="About" meta={[]} keywords={[]} />
            {/* <img style={{padding: '0px 120px'}} src="https://res.cloudinary.com/Forkhive/image/upload/c_scale,h_488,w_1100/v1602346526/about-pic-1_ap8izp.jpg"/> */}
            <div className="intro">
                <div className="container" style={{ padding: '0px 120px' }}>
                    <div className="row">
                        <div style={{ fontWeight: 'bold' }} className="col-12">
                            <h1><Trans>OVER 4 YEARS IN THE FIELD</Trans></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-6">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title-3 mb-3" style={{ textAlign: "center" }}>
                            <Trans>We're the No.1 <strong>Software Company</strong></Trans>
                        </h2>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>
                            We're a forward-thinking Software Development Company specializing in <strong style={{ color: '#eba937' }}>Frontend Web Development</strong>. Passionate about innovation, we're extending our expertise into transformative realms —
                            <strong style={{ color: '#eba937' }}>
                                Data Science
                            </strong>, {' '}
                            <strong style={{ color: '#eba937' }}>
                                Artificial Intelligence
                            </strong>, {' '}
                            <strong style={{ color: '#eba937' }}> and
                                Machine Learning
                            </strong>
                        </p>

                        <p>
                            Our commitment is to redefine digital possibilities through sleek and intuitive web interfaces while harnessing the power of advanced technologies. Whether crafting seamless user experiences or delving into the realms of AI and machine learning, we're dedicated to pushing boundaries and staying at the forefront of technological evolution.
                        </p>

                        <p>
                            Join us on this exciting journey as we build the future of software solutions, blending aesthetics with intelligence for unparalleled digital experiences.
                        </p>
                    </div>

                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                        <div className="col-12">
                            <h2 className="title-3 mb-3" style={{ textAlign: "center" }}>
                                <Trans>Our <strong>Vision & Mission</strong></Trans>
                            </h2>
                        </div>
                    <div className='grid-container'>
                        {about.map((edge, index) => (
                            <div key={index} className="mb-1">
                                <div className={`card service feature ${darkMode ? 'dark-mode' : ''}`}>
                                    <div className="card-content">
                                        <h5 style={{ fontWeight: 'bold', textAlign: 'center' }}><Trans>{edge.node.frontmatter.title}</Trans></h5>
                                        <p style={{ wordSpacing: '0.2rem', fontStyle: 'italic' }}><Trans>{edge.node.excerpt}</Trans></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query ($language: String!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/about/" } }
            sort: { frontmatter: { date: DESC }} 
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
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
`

export default About
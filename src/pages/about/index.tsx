import { PageProps, graphql } from 'gatsby';
import React from 'react'
import SEO from '../../components/SEO/SEO'
import Layout from '../../layouts/index'
import { Trans } from 'gatsby-plugin-react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import efficiency from "../../images/efficiency.svg"
import timely from "../../images/timely.svg"
import trust from "../../images/trust.svg"

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
                            <h1 style={{ fontWeight: 'bold', textAlign: 'center', width: '100%' }}><Trans>OVER 4 YEARS IN THE FIELD</Trans></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-6">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title-3 mb-3" style={{ textAlign: "center" }}>
                            <Trans>We're the No.1</Trans> <strong><Trans>Software Company</Trans></strong>
                        </h2>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p className='container'>
                            <Trans>We're a forward-thinking Software Development Company specializing in</Trans> <strong style={{ color: '#eba937' }}><Trans>Front-End Development</Trans></strong>. <Trans>Passionate about innovation, we're extending our expertise into transformative realms</Trans> —
                            <strong style={{ color: '#eba937' }}>
                                <Trans>Data Science</Trans>
                            </strong>, {' '}
                            <strong style={{ color: '#eba937' }}>
                                <Trans>Artificial Intelligence</Trans>
                            </strong>, {' '}
                            <strong style={{ color: '#eba937' }}> <Trans>and</Trans>{' '}
                                <Trans>Machine Learning</Trans>
                            </strong>
                        </p>

                        <p className='container'>
                            <Trans>
                                Our commitment is to redefine digital possibilities through sleek and intuitive web interfaces while harnessing the power of advanced technologies. Whether crafting seamless user experiences or delving into the realms of AI and machine learning, we're dedicated to pushing boundaries and staying at the forefront of technological evolution.
                            </Trans>
                        </p>

                        <p className='container'>
                            <Trans>
                                Join us on this exciting journey as we build the future of software solutions, blending aesthetics with intelligence for unparalleled digital experiences.
                            </Trans>
                        </p>
                    </div>

                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title-3 mb-3" style={{ textAlign: "center" }}>
                            <Trans>Our</Trans> <strong><Trans>Vision & Mission</Trans></strong>
                        </h2>
                    </div>
                    <div className='container grid-container'>
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

            <div className="container pb-6 mb-9">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title-3 mb-3" style={{ textAlign: "center" }}>
                            <Trans>Our</Trans> <strong><Trans>Core Values</Trans></strong>
                        </h2>
                    </div>
                    {/* <img src={efficiency} width={'36px'} height={'36px'} />

                    <img src={timely} width={'8rem'} height={'8rem'} />
                    <img src={} width={'1rem'} height={'1rem'} />
                    <h5 style={{ fontWeight: 'bold', fontSize: '1.25rem' }} className='feature-title'>
                        <Trans></Trans>
                    </h5>
                    <h5 style={{ fontWeight: 'bold', fontSize: '1.25rem' }} className='feature-title'>
                        <Trans></Trans>
                    </h5> */}

                </div>

                <div style={{ textAlign: "center", display: 'flex', justifyContent: 'space-evenly' }} className='text-center'>
                    <div className={`grid-item grid-item_0`}>
                    <img src={efficiency} width={'36px'} height={'36px'} />
                        <br />
                        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                            <Trans>Efficiency</Trans>
                        </span>
                    </div>
                    <div className={`grid-item grid-item_1`}>
                        <img src={timely} width={'36px'} height={'36px'} />
                        <br />
                        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                            <Trans>Timeliness</Trans>
                        </span>
                    </div>
                    <div className={`grid-item grid-item_2`}>
                        <img src={trust} width={'36px'} height={'36px'} />
                        <br />
                        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                            <Trans>Trust</Trans>
                        </span>
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
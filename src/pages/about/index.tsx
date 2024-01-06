import { PageProps, graphql } from 'gatsby';
import React from 'react'
import SEO from '../../components/SEO/SEO'
import Layout from '../../layouts/index'
import { Trans } from 'gatsby-plugin-react-i18next';

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
                    {about.map((edge, index) => (
                        <div key={index} className="col-single mb-1">
                            <div className="card service">
                                <div className="card-content">
                                    <h5 style={{ fontWeight: 'bold' }}><Trans>{edge.node.frontmatter.title}</Trans></h5>
                                    <p style={{ wordSpacing: '0.2rem' }}><Trans>{edge.node.excerpt}</Trans></p>
                                </div>
                            </div>
                        </div>
                    ))}
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
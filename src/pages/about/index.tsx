import { PageProps, graphql } from 'gatsby';
import React from 'react'
import SEO from '../../components/SEO/SEO'
import Layout from '../../layouts/index'

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
                            <h1>OVER 4 YEARS IN THE FIELD</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    {about.map((edge, index) => (
                        <div key={index} className="col-12 col-md-4 mb-1">
                            <div className="card service">
                                <div className="card-content">
                                    <h5 style={{ fontWeight: 'bold' }}>{edge.node.frontmatter.title}</h5>
                                    <p style={{ wordSpacing: '0.2rem' }}>{edge.node.excerpt}</p>
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
    query AboutQuery {
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
    }
`

export default About
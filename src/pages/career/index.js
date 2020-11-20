import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'

const Career = (props) => {
    const career = props.data.allMarkdownRemark.edges
    return (
        <Layout bodyClass="page-career">
            <SEO title="Career" />

            <div className="col-12" style={{ padding: '4rem 0 3rem 7rem' }}>
                <h2 className="title-3 text-dark mb-3" style={{ textAlign: "left" }}><strong>Want To Join Us</strong></h2>
                <p style={{ textAlign: "left", wordSpacing: '0.2rem' }}>THE MOST SKILLS NEEDED RIGHT NOW</p>
                <div className="call-box-bottom">
                    <Link to="/contact" className="button">
                        Join now
                    </Link>
                </div>
            </div>

            <div className="container pt-8 pt-md-10">
                <div className="row justify-content-start">
                    <div className="col-12">

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">REACT NATIVE</h5>
                                        <p clasName="card-text">Senior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">REACT/GATSBY DEVELOPER</h5>
                                        <p clasName="card-text">Senior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">UI/UX DESIGNER</h5>
                                        <p clasName="card-text">Senior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">COPY WRITER</h5>
                                        <p clasName="card-text">Junior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">NODE DEVELOPER</h5>
                                        <p clasName="card-text">Senior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">GRAPHQL</h5>
                                        <p clasName="card-text">Senior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 style={{ fontWeight: 'bold' }} className="card-title">DATA SCIENTIST, AI AND ML ENGINEERS</h5>
                                        <p clasName="card-text">Senior</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* background Image with writeup start */}
            {/* Writeup  - find your dream job at bloomhub, want to join data scientist and ML Engineers */}
            {/* background Image with writeup end */}

            {/* Image left and write-up right */}

            <div className="container pb-6">
                <div className="row">
                    {career.map(edge => (
                        <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
                            <div className="card service service-teaser">
                                <div className="card-content">
                                    {/* <span>{edge.node.frontmatter.date}</span> */}
                                    {/* <p style={{wordSpacing: '0.2rem'}}>{edge.node.excerpt}</p> */}
                                    {/* <Link style={{textDecoration: 'none', fontWeight: '700', fontSize: '15px'}} to={edge.node.frontmatter.path}>Read More »</Link> */}
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
    query CareerQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath:  {regex: "/career/" } }
            sort: { fields: [frontmatter___date], order: DESC }
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

export default Career;
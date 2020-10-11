import React from 'react'
import Call from '../../components/Call'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'

const Career = (props) => {
    const career = props.data.allMarkdownRemark.edges
    return (
        <Layout bodyClass="page-career">
            <SEO title="Career"/>
                <div style={{backgroundPosition: 'center', height: '488px', width: '1100px', margin: '0px 120px', backgroundRepeat: 'no-repeat', backgroundImage: `url(https://res.cloudinary.com/bloomhub/image/upload/c_scale,h_710,w_1753/v1602352658/career_cyozur.jpg)`}}>
                    <h1 style={{ fontSize: '30px', padding: '32px 20px'}}><strong>WANT TO JOIN US</strong></h1>
                    <p style={{fontWeight: 'bold', fontSize: '20px', color: 'white', padding: '95px 20px'}}>Contact Us Below</p>
                    <Call button/>
                </div>

                <div className="container pt-8 pt-md-10">
                    <div className="row justify-content-start">
                        <div className="col-12">
                            <h2 className="title-3 text-dark mb-3" style={{ textAlign: "center"}}><strong>THE MOST SKILLS NEEDED RIGHT NOW</strong></h2>
                        
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">REACT NATIVE</h5>
                                            <p clasName="card-text">Senior</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">REACT/GATSBY DEVELOPER</h5>
                                            <p clasName="card-text">Senior</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">UI/UX DESIGNER</h5>
                                            <p clasName="card-text">Senior</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">COPY WRITER</h5>
                                            <p clasName="card-text">Junior</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">NODE DEVELOPER</h5>
                                            <p clasName="card-text">Senior</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">GRAPHQL</h5>
                                            <p clasName="card-text">Senior</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 style={{fontWeight:'bold'}} className="card-title">DATA SCIENTIST, AI AND ML ENGINEERS</h5>
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
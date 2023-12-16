import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'

interface ICareer extends PageProps {
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

const Career: React.FC<ICareer> = (props) => {
    const career = props.data.allMarkdownRemark.edges
    return (
        <Layout bodyClass="page-career">
            <SEO title="Career" meta={[]} keywords={[]} />

            <div className="col-12" style={{ padding: '4rem 0 3rem 7rem' }}>
                <h2 className="title-3 text-dark mb-3" style={{ textAlign: "left" }}><strong>Want To Join Us</strong></h2>
                <p style={{ textAlign: "left", wordSpacing: '0.2rem' }}>THE MOST SKILLS NEEDED RIGHT NOW</p>
                <div className="call-box-bottom">
                    <br />
                    <br />
                </div>
            </div>

            <div className="container pt-8 pt-md-10">
                <div className="row justify-content-start">
                    <div className="col-12">
                    </div>

                    <div className="section">
                        <div className="center">

                            <h2 className="title-3 text-dark mb-3">Open Roles</h2>
                        </div>

                        <div className="container content">


                            <table className="table table-bordered table-hover" style={{ width: '100%' }}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Role</th>
                                        <th scope="col">Nature of Work</th>
                                        <th scope="col">Full Description</th>
                                        {/* <th scope="col">Weekly Pay</th> */}
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td ><strong>React Native</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/react-native" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>Team Manager</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/teammanager" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>
                                    <tr>
                                        <td ><strong>PHP LARAVEL Native</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/php-laravel" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>MERN/MEAN Stack Developer</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/mern-stack" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>UI/UX</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/uiux" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>React Developer</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/react-developer" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>Project Manager</strong></td>
                                        <td >Remote (Nigeria Timezones)</td>
                                        <td><Link to="/projectmanager" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>React Firebase Developer</strong></td>
                                        <td> Remote (Nigeria Timezones)</td>
                                        <td><Link to="/react-firebase-developer" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>

                                    <tr>
                                        <td ><strong>Data Scientist, AI and ML Engineers</strong></td>
                                        <td> Remote (Nigeria Timezones)</td>
                                        <td><Link to="/datascience" style={{ textDecoration: 'none' }}>View Role</Link></td>
                                        {/* <td >NGN5,000</td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <p >Sorry, we are not seeking interns at this time ☹️</p>
                </div>
            </div>

        </Layout>
    );
}

export const query = graphql`
    query CareerQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath:  {regex: "/career/" } }
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

export default Career;
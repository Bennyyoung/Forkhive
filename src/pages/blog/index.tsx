import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import './index.css'
import bg from './bg-01.jpg'

interface IBlogs extends PageProps {
    data: {
        allMarkdownRemark: {
            edges: Array<{
                node: {
                    excerpt: string
                    frontmatter: {
                        title: string
                        path: string
                        date: string
                    }
                }
            }>
        }
    }
}

const Blogs: React.FC<IBlogs> = (props) => {
    const blogs = props.data.allMarkdownRemark.edges;
    return (
        <Layout bodyClass="page-blog">
        <SEO title="Blog" meta={[]} keywords={[]}/>
        <div className="intro">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>LATEST POSTS</h1>
                    </div>
                </div>
            </div>
        </div>

        {/* <article className="card">
            <header>
                <h2 style={{fontWeight: 'bold'}}>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                </h2>
                <span>{edge.node.frontmatter.date}</span>
                    <p style={{wordSpacing: '0.2rem'}}>{edge.node.excerpt}</p>
                    <Link style={{textDecoration: 'none', fontWeight: '700', fontSize: '15px'}} to={edge.node.frontmatter.path}>Read More »</Link>

            </header>
        </article> */}

        <div className="container pb-3">
            <div className="row">
                {blogs.map(edge => (
                    <article id="card" className="col-12 col-md-6 col-lg-4 mb-2" key={edge.node.frontmatter.path}>
                        <Link to={edge.node.frontmatter.path}>
                            <img src={bg}/>
                        </Link>
                        <header>
                            <div>
                                <h2 className="post-title" style={{fontWeight: 'bold'}}>
                                    <Link className="post-link" to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                                </h2>
                                <div className="post-meta">{edge.node.frontmatter.date}</div>
                                {/* <p style={{wordSpacing: '0.2rem'}}>{edge.node.excerpt}</p>
                                <Link style={{textDecoration: 'none', fontWeight: '700', fontSize: '15px'}} to={edge.node.frontmatter.path}>Read More »</Link> */}
                            </div>
                        </header>
                    </article>
                ))}
            </div>
        </div>
    </Layout>
    );
}

export const query = graphql`
    query BlogsQuery {
        
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/" } }
            sort: { frontmatter: { date: DESC }}
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM DD, YYYY" )
                    }
                }
            }
        }
    }
`;

export default Blogs;
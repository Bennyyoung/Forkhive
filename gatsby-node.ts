import path from 'path';
import { GatsbyNode } from 'gatsby'

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      draft: Boolean
    }
  `;
  createTypes(typeDefs);
};

interface GraphqlData {
  services: {
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          path: string
          title: string
          data: string
        }
        excerpt: string
      }
    }>
  },
  team: {
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          path: string
          title: string
          data: string
        }
        excerpt: string
      }
    }>
  },
  testimonials: {
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          path: string
          title: string
          data: string
        }
        excerpt: string
      }
    }>
  },
}

// Create pages from markdown files

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  try {
    const result = await graphql<GraphqlData>(
      `
      query {
        services: allMarkdownRemark(
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
        team: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/team/" } }
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
        testimonials: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/testimonials/" } }
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
      }
    `
    )

    if (result && result.data) {
      result.data.services.edges.forEach(({ node }) => {
        const component = path.resolve('src/templates/service.tsx');
        createPage({
          path: node.frontmatter.path,
          component,
          context: {
            id: node.id,
          },
        });
      });
      result.data.team.edges.forEach(({ node }) => {
        const component = path.resolve('src/templates/team.tsx');
        createPage({
          path: node.frontmatter.path,
          component,
          context: {
            id: node.id,
          },
        });
      });
      result.data.testimonials.edges.forEach(({ node }) => {
        const component = path.resolve('src/templates/testimonial.tsx');
        createPage({
          path: node.frontmatter.path,
          component,
          context: {
            id: node.id,
          },
        });
      });
    }
  } catch (error) {
    console.error('Error creating pages', error)
  }

};

export { createPages }

// Customizing webpack 
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

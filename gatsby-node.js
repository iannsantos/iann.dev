const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

// Add slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })

    createNodeField({
      node,
      name: 'slug',
      value: `blog/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allMarkdownRemark() {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}

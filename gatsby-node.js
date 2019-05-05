const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 10000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              category
              where
            }
          }
        }
      }
    }
  `).then(result => {

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark

    const books = edges.filter(edge => edge.node.frontmatter.templateKey === "book-page");
    const pages = edges.filter(edge => !["book-page", "research-paper"].includes(edge.node.frontmatter.templateKey));
    const researchPapers = edges.filter(edge => edge.node.frontmatter.templateKey === "research-paper");

    pages.forEach(edge => {
      const { id } = edge.node
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        context: {
          slug: edge.node.fields.slug,
          id,
          researchPapers,
        },
      })
    })

    books.forEach((edge, index) => {
      const { id } = edge.node
      const prev = index === 0 ? books[books.length - 1].node : books[index - 1].node;
      const next = (index + 1 === books.length) ? books[0].node : books[index + 1].node;

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        context: {
          slug: edge.node.fields.slug,
          id,
          books,
          next,
          prev
        },
      })
    })

    researchPapers.forEach((edge, index) => {
      const { id } = edge.node
      const prev = index === 0 ? researchPapers[researchPapers.length - 1].node : researchPapers[index - 1].node;
      const next = (index + 1 === researchPapers.length) ? researchPapers[0].node : researchPapers[index + 1].node;

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        context: {
          slug: edge.node.fields.slug,
          id,
          researchPapers,
          next,
          prev
        },
      })
    })
  })
}
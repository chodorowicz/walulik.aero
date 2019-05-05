import React from "react"
import { graphql } from "gatsby"
import { DeepRequired } from "utility-types"

import { Layout } from "../layout"
import { SectionTop } from "../components"
import BooksPageBackground from "../images/books/books-bg@2x.jpg"
import { SectionBooks } from "./books-components/section-books"
import { BooksPageTemplateQuery } from "../generated/graphql"; 

interface IProps {
  data: DeepRequired<BooksPageTemplateQuery>;
}

const Books: React.FC<IProps> = props => {
  const { data } = props

  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SectionTop background={BooksPageBackground} isHome={false} />
      <SectionBooks
        books={data.allMarkdownRemark.edges}
        text={html}
        title={frontmatter.title}
      />
    </Layout>
  )
}

export default Books

export const booksListFields = graphql`
  fragment booksListFields on MarkdownRemarkConnection {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          publisher
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export const pageQuery = graphql`
  query BooksPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "books-page" } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark: allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "book-page" } } }
    ) {
      ...booksListFields
    }
  }
`

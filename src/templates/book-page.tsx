import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../layout"
import { SectionTop } from "../components"
import { BookTop } from "./book/book-top"
import { BookContent } from "./book/book-content"

interface IProps {
  data: {
    markdownRemark: {
      frontmatter: {
        claim: string
      }
    }
  }
}

const BookPage: React.FC<IProps> = props => {
  const { html, frontmatter } = props.data.markdownRemark;
  const { image, text, title } = frontmatter;

  return (
    <Layout>
      <SectionTop isHome={false}>
        <BookTop fluid={image.childImageSharp.fluid} text={text} title={title}/>
      </SectionTop>
      <BookContent html={html} />
    </Layout>
  )
}

export default BookPage

export const pageQuery = graphql`
  query BookPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "book-page" } }) {
      html
      frontmatter {
        text
        title
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
`

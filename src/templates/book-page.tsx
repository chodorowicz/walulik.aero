import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../layout"
import { SectionTop } from "../components"
import { BookTop } from "./book/book-top"

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
  const { image, text, title } = props.data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SectionTop isHome={false}>
        <BookTop fluid={image.childImageSharp.fluid} text={text} title={title}/>
      </SectionTop>
    </Layout>
  )
}

export default BookPage

export const pageQuery = graphql`
  query BookPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "book-page" } }) {
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

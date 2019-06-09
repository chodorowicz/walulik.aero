import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../layout"
import { SectionTopBooks } from "../components"
import { BookTop } from "./book/book-top"
import { BookContent } from "./book/book-content"
import { BookExtra } from "./book/book-extra"

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
  const { data, pageContext } = props
  const { html, frontmatter } = props.data.markdownRemark
  const { image, text, title, extraBadge, extraBg, extraContentRight, extraContentLeft } = frontmatter
  const { next, prev } = pageContext
  const nextLink = next && next.fields.slug
  const prevLink = prev && prev.fields.slug

  return (
    <Layout title={title}>
      <SectionTopBooks>
        <BookTop
          fluid={image.childImageSharp.fluid}
          extraBadge={extraBadge}
          text={text}
          title={title}
          nextLink={nextLink}
          prevLink={prevLink}
        />
      </SectionTopBooks>
      <BookContent html={html} />
      {extraBg && <BookExtra extraBg={extraBg} extraContentRight={extraContentRight} extraContentLeft={extraContentLeft}/>}
    </Layout>
  )
}

export default BookPage

export const pageQuery = graphql`
  query BookPageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        text
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        extraBadge {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        extraContentRight
        extraContentLeft
        extraBg {
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

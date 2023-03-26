import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"

import { Layout } from "../layout"
import { SectionTopBooks } from "../components"
import { BookTop } from "./book/book-top"
import { BookContent } from "./book/book-content"
import { BookExtra } from "./book/book-extra"
import { IDefaultMeta } from "MyTypes"

type IProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        claim: string
      }
    }
  }
} & IDefaultMeta

const BookPage: React.FC<IProps> = props => {
  const { data, pageContext } = props
  const { html, frontmatter } = props.data.markdownRemark
  const {
    image,
    text,
    title,
    extraBadge,
    extraBg,
    extraContentRight,
    extraContentLeft,
    titleTag,
    descriptionTag,
    extraBgCenteringSmall,
  } = frontmatter
  const { next, prev } = pageContext
  const nextLink = next && `/${next.fields.slug}`
  const prevLink = prev && `/${prev.fields.slug}`

  const theme = {
    extraBgCenteringSmall,
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout title={titleTag} description={descriptionTag}>
        <SectionTopBooks>
          <BookTop
            fluid={image}
            extraBadge={extraBadge}
            text={text}
            title={title}
            nextLink={nextLink}
            prevLink={prevLink}
          />
        </SectionTopBooks>
        <BookContent html={html} />
        {extraBg && (
          <BookExtra
            extraBg={extraBg}
            extraContentRight={extraContentRight}
            extraContentLeft={extraContentLeft}
          />
        )}
      </Layout>
    </ThemeProvider>
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
        titleTag
        descriptionTag
        image {
          childImageSharp {
            gatsbyImageData(width: 1048, placeholder: BLURRED)
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
        extraBgCenteringSmall
      }
    }
  }
`

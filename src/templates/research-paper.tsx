import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { ThemeProvider } from "emotion-theming"

import { Layout } from "../layout"
import { gradient } from "../styles"
import { SectionTopShort, WrapperContent } from "../components"
import { Paper } from "./research-paper/paper"
import { IDefaultMeta } from "MyTypes"

const PageWrapper = styled.div`
  ${gradient};
`

const theme = {
  lightMenu: true,
}

const ResearchPapersPage: React.FC<IDefaultMeta> = props => {
  const { data, pageContext } = props
  const { html, frontmatter } = data.markdownRemark
  const { title, where, category, titleTag, descriptionTag } = frontmatter
  const { next, prev } = pageContext
  const nextLink = next && `/${next.fields.slug}`
  const prevLink = prev && `/${prev.fields.slug}`

  return (
    <ThemeProvider theme={theme}>
      <Layout title={titleTag} description={descriptionTag}>
        <PageWrapper>
          <WrapperContent>
            <SectionTopShort />
            <Paper
              nextLink={nextLink}
              prevLink={prevLink}
              title={title}
              html={html}
              where={where}
              category={category}
            />
          </WrapperContent>
        </PageWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default ResearchPapersPage

export const pageQuery = graphql`
  query ResearchPageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        where
        title
        category
        titleTag
        descriptionTag
      }
    }
  }
`

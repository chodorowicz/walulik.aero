import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { ThemeProvider } from 'emotion-theming'


import { Layout } from "../layout"
import { gradient } from "../styles"
import { SectionTopShort, WrapperContent } from "../components"
import BooksPageBackground from "../images/books/books-bg@2x.jpg"
import { SectionResearchPapers } from "./research-papers/section-reasearch-papers"
import { Paper } from "./research-paper/paper";

const PageWrapper = styled.div`
  ${gradient};
`

const theme = {
  lightMenu: true 
}


const ResearchPapersPage: React.FC = (props) => {
  console.log(props)
  const { data, pageContext } = props
  const { html, frontmatter } = data.markdownRemark
  const { title, where, category } = frontmatter
  const { next, prev } = pageContext
  const nextLink = next && next.fields.slug
  const prevLink = prev && prev.fields.slug

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PageWrapper>
          <WrapperContent>
            <SectionTopShort />
            <Paper nextLink={nextLink} prevLink={prevLink} title={title} html={html} where={where} category={category} />
          </WrapperContent>
        </PageWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default ResearchPapersPage

// export const pageQuery = graphql`
//   query ResearchPapersPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "research-papers-page" } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query ResearchPageTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        where
        title
        category
      }
    }
  }
`


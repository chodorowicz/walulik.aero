import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../layout"
import { SectionTop } from "../components"
import ResearchPageBackground from "../images/research/research-bg@2x.jpg"
import { SectionResearchPapers } from "./research-papers/section-reasearch-papers"
import { IDefaultMeta } from "MyTypes";

const ResearchPapersPage: React.FC<IDefaultMeta> = ({ data, pageContext }) => {
  const { categories, title, titleTag, descriptionTag } = data.markdownRemark.frontmatter;
  return (
    <Layout title={titleTag} description={descriptionTag}>
      <SectionTop background={ResearchPageBackground} isHome={false} />
      <SectionResearchPapers
        title={title}
        html={data.markdownRemark.html}
        categories={categories}
        researchPapers={pageContext.researchPapers}
      />
    </Layout>
  )
}

export default ResearchPapersPage

export const pageQuery = graphql`
  query ResearchPapersPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "research-papers-page" } }
    ) {
      html
      frontmatter {
        title
        category
        where
        categories
        titleTag
        descriptionTag
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import { uniq } from "lodash"

import { Layout } from "../layout"
import { SectionTop } from "../components"
import ResearchPageBackground from "../images/research/research-bg@2x.jpg"
import { SectionResearchPapers } from "./research-papers/section-reasearch-papers"

interface IPaper {
  node: {
    frontmatter: {
      category: string
    }
  }
}

function getCategories(papers: IPaper[]): string[] {
  const categories = papers.map(paper => paper.node.frontmatter.category)

  return uniq(categories)
}

const ResearchPapersPage: React.FC = ({ data, pageContext }) => {
  const categories = getCategories(pageContext.researchPapers);
  return (
    <Layout>
      <SectionTop background={ResearchPageBackground} isHome={false} />
      <SectionResearchPapers
        title={data.markdownRemark.frontmatter.title}
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
      }
    }
  }
`

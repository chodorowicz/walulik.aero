import React from "react"
import { graphql } from 'gatsby'

import { Layout } from "../layout"
import { SectionTop } from "../components";
import BooksPageBackground from "../images/books/books-bg@2x.jpg"
import { SectionResearchPapers } from "./research-papers/section-reasearch-papers";

const ResearchPapersPage: React.FC = () => {
  return (
    <Layout>
      asd
    </Layout>
  )
}

export default ResearchPapersPage;

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
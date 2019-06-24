import React from "react"
import { graphql } from "gatsby"
import { IDefaultMeta } from "MyTypes"

import { Layout } from "../layout"
import {
  SectonPhotoText,
  SectionBooks,
  SectionPapers,
  SectionContact,
} from "./home"
import { SectionTop } from "../components/section-top"
import HomePageImage from "../images/home-page-bg@2x-optimized.jpg"
import { HomePageTemplateQuery } from "../generated/graphql"

type IProps = {
  data: HomePageTemplateQuery
} & IDefaultMeta

const HomePage: React.FC<IProps> = props => {
  const {
    claim,
    titleTag,
    descriptionTag,
    about,
    aboutResearchPapers
  } = props.data.markdownRemark.frontmatter
  return (
    <Layout title={titleTag} description={descriptionTag}>
      <SectionTop background={HomePageImage} isHome={true} claim={claim} />
      <SectonPhotoText about={about} />
      <SectionBooks />
      <SectionPapers aboutResearchPapers={aboutResearchPapers} />
      <SectionContact />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        claim
        titleTag
        descriptionTag
        about
        aboutResearchPapers
      }
    }
  }
`

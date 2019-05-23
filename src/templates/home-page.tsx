import React from "react"
import { graphql } from 'gatsby'

import { Layout } from "../layout"
import { SectonPhotoText, SectionBooks, SectionPapers, SectionContact } from "./home";
import { SectionTop } from "../components/section-top";
import HomePageImage from "../images/home-page-bg@2x-optimized.jpg"
import { HomePageTemplateQuery } from "../generated/graphql"

interface IProps {
  data: HomePageTemplateQuery
}

const HomePage: React.FC<IProps> = (props) => {
  const { claim } = props.data.markdownRemark.frontmatter;
  return (
    <Layout>
      <SectionTop background={HomePageImage} isHome={true} claim={claim} />
      <SectonPhotoText />
      <SectionBooks />
      <SectionPapers />
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
      }
    }
  }
`

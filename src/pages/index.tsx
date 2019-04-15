import React from "react"

import { Layout } from "../layout"
import { SectonPhotoText, SectionBooks, SectionPapers, SectionContact } from "./home/";
import { SectionTop } from "../components/section-top";
import HomePageImage from "../images/home-page-bg@2x.jpg"

const HomePage: React.FC = () => (
  <Layout>
    <SectionTop background={HomePageImage} />
    <SectonPhotoText />
    <SectionBooks />
    <SectionPapers />
    <SectionContact />
  </Layout>
)

export default HomePage

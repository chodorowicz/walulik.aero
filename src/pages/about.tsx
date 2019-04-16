import React from "react"

import { SectionTop } from "../components";
import AboutPageBackground from "../images/about-bg@2x.jpg"
import { Layout } from "../layout"
import { SectionAbout } from "./about-components/section-about";
import { SectionPublications } from "./about-components/section-publications";

const About: React.FC = () => (
  <Layout>
    <SectionTop background={AboutPageBackground} isHome={false} />
    <SectionAbout />
    <SectionPublications />
  </Layout>
)

export default About;
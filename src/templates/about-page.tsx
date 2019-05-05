import React from "react"

import { SectionTop } from "../components";
import AboutPageBackground from "../images/about-bg@2x.jpg"
import { Layout } from "../layout"
import { SectionAbout } from "./about-components/section-about";
import { SectionPublications } from "./about-components/section-publications";
import { SectionEducation } from "./about-components/section-education";

const About: React.FC = () => (
  <Layout>
    <SectionTop background={AboutPageBackground} isHome={false} />
    <SectionAbout />
    <SectionPublications />
    <SectionEducation />
  </Layout>
)

export default About;
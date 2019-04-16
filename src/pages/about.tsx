import React from "react"

import { SectionTop } from "../components";
import AboutPageBackground from "../images/about-bg@2x.jpg"
import { Layout } from "../layout"
import { SectionAbout } from "./about-components/section-about";

const About: React.FC = () => (
  <Layout>
    <SectionTop background={AboutPageBackground} isHome={false} />
    <SectionAbout />
  </Layout>
)

export default About;
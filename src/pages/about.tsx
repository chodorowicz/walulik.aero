import React from "react"

import { SectionTop } from "../components";
import AboutPageBackground from "../images/about-bg@2x.jpg"
import { Layout } from "../layout"

const About: React.FC = () => (
  <Layout>
    <SectionTop background={AboutPageBackground} />
  </Layout>
)

export default About;
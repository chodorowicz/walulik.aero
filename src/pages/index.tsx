import React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes } from "../constants"
import HomePageImage from "../images/home-page-bg@2x.jpg"
import { Layout } from "../layout"
import { Menu, SectonPhotoText } from "./home/";

const TopSection = styled.div`
  background-image: url("${HomePageImage}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  position: relative;
  padding-left: 100px;
  padding-right: 100px;
`

const HomePageTitle = styled.h2`
  font-size: ${fontSizes.xLarge}px;
  color: ${colors.accent};
  font-weight: 700;
  margin: 0;
  position: absolute;
  top: 8%;
`

const Title = styled.h1`
  font-size: ${fontSizes.xxLarge}px;
  color: ${colors.white};
  position: absolute;
  bottom: 15%;
`

const HomePage: React.FC = children => (
  <Layout>
    <TopSection>
      <HomePageTitle>Jan Walulik</HomePageTitle>
      <Title>
        Aviation <br />
        Research <br />
        &amp; Consulting
      </Title>
      <Menu />
    </TopSection>
    <SectonPhotoText />
  </Layout>
)

export default HomePage

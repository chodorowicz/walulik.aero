import React from "react"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"
import { Global, css } from '@emotion/core'

import { colors, fontSizes } from "../constants";
import HomePageImage from "../images/home-page-bg@2x.jpg";

const Container = styled.div`
  background-image: url("${HomePageImage}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
`

const HomePageTitle = styled.h2`
  font-size: ${fontSizes.xLarge}px;
  color: ${colors.accent};
  font-weight: 700;
  margin: 0;
`;

export default () => (
  <div>
    <Global styles={css`
      body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
      }
    `} />
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;subset=latin-ext" rel="stylesheet" />
    </Helmet>
    <Container><HomePageTitle>Jan Walulik</HomePageTitle></Container>
  </div>
)

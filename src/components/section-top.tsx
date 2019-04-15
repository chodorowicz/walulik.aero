import * as React from 'react';
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, fontFamily, urls } from "../constants"
import HomePageImage from "../../images/home-page-bg@2x.jpg"
import { Menu } from "../layout/menu"
import { TopSection } from ".";

const HomePageTitle = styled.h2`
  margin: 0;
  position: absolute;
  top: 8%;
`

const StyledTitleLink = styled(Link)`
  font-size: ${fontSizes.xLarge}px;
  font-family: ${fontFamily.roboto};
  color: ${colors.accent};
  font-weight: 700;
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: ${fontSizes.xxLarge}px;
  font-family: ${fontFamily.montserrat};
  color: ${colors.white};
  position: absolute;
  bottom: 15%;
`

interface IProps {
  background: string;
}

export const SectionTop: React.FC<IProps> = ({ background }) => {
  return (
    <TopSection background={background}>
      <HomePageTitle><StyledTitleLink to={urls.home}>Jan Walulik</StyledTitleLink></HomePageTitle>
      <Title>
        Aviation <br />
        Research <br />
        &amp; Consulting
      </Title>
      <Menu />
    </TopSection>
  );
}

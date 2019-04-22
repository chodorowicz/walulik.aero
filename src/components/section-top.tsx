import * as React from 'react';
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, fontFamily, urls } from "../constants"
import { Menu } from "../layout/menu"
import { TopSection } from ".";
import { MarkdownContainer } from "../components"

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
  isHome: boolean;
  claim: string;
}

export const SectionTop: React.FC<IProps> = ({ background, isHome = false, claim }) => {
  return (
    <TopSection background={background}>
      <HomePageTitle><StyledTitleLink to={urls.home}>Jan Walulik</StyledTitleLink></HomePageTitle>
      {isHome && <Title> <MarkdownContainer content={claim} /></Title>}
      <Menu />
    </TopSection>
  );
}

import * as React from 'react';
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, fontFamily, urls } from "../constants"
import { Menu } from "../layout/menu"
import { TopSection } from ".";
import { MarkdownContainer } from "../components"
import LogoJan from "../images/logo-jan.svg"

const HomePageTitle = styled.h2`
  margin: 0;
  position: absolute;
  top: 8%;
`

const Title = styled.h1`
  font-size: ${fontSizes.xxLarge}px;
  font-family: ${fontFamily.montserrat};
  color: ${colors.white};
  position: absolute;
  bottom: 15%;
`

interface IProps {
  background?: string;
  isHome: boolean;
  claim?: string;
}

export const SectionTop: React.FC<IProps> = ({ background, isHome = false, claim, children }) => {
  return (
    <TopSection background={background || ""}>
      <HomePageTitle><Link to={urls.home}><LogoJan /></Link></HomePageTitle>
      {(isHome && claim) && <Title><MarkdownContainer content={claim} /></Title>}
      {children}
      <Menu />
    </TopSection>
  );
}

const SectionTopShortContainer = styled.div`
  position: relative;
  height: 400px;
`;

export const SectionTopShort: React.FC = () => {
  return (
    <SectionTopShortContainer>
      <HomePageTitle><Link to={urls.home}><LogoJan /></Link></HomePageTitle>
      <Menu />
    </SectionTopShortContainer>
  );
}
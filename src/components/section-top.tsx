import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import MediaQuery from 'react-responsive';

import { colors, fontSizes, fontFamily, urls, mq, spacings, breakPoints } from "../constants"
import { Menu } from "../layout/menu"
import { WrapperContent, WrapperContentNoMobilePadding } from "./wrappers"
import { TopSectionBackground } from "./top-section-background"
import { MarkdownContainer } from "../components"
import LogoJan from "../images/logo-jan.svg"
import LogoJanSmall from "../images/logo-small.svg"

interface IProps {
  background?: string
  isHome: boolean
  claim?: string
}

const HomePageTitle = styled.h2`
  margin: 0;
`

const Title = styled.h1`
  font-size: ${fontSizes.xxLarge}px;
  font-family: ${fontFamily.montserrat};
  color: ${colors.white};
  position: absolute;
  bottom: 0;
  margin-bottom: 50px;

  font-size: ${fontSizes.size36}px;
  ${mq.b768} {
    font-size: ${fontSizes.xxLarge}px;
    margin-bottom: 120px;
  }
`

const TopSectionSC = styled(TopSectionBackground)<{ isHome: boolean }>`
  background-position: center ${props => props.isHome ? "right -200px" : "right"};
  display: flex;
  ${mq.b768} {
    background-position: center ${props => props.isHome ? "right" : "right"};
  }
`

const LogoMenuContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${spacings.space30}px;
  ${mq.b768} {
    padding-top: ${spacings.space60}px;
  }
`

const LogoAndMenu: React.FC = () => {
  return (
    <LogoMenuContainerSC>
      <HomePageTitle>
        <Link to={urls.home}>
          <MediaQuery minDeviceWidth={breakPoints.b768}>
            {matches => matches ? <LogoJan /> : <LogoJanSmall />}
          </MediaQuery>
        </Link>
      </HomePageTitle>
      <Menu />
    </LogoMenuContainerSC>
  )
}

export const SectionTop: React.FC<IProps> = ({
  background,
  isHome = false,
  claim,
  children,
}) => {
  return (
    <TopSectionSC background={background || ""} isHome={isHome}>
      <WrapperContent>
        <LogoAndMenu />
        {isHome && claim && (
          <Title>
            <MarkdownContainer content={claim} />
          </Title>
        )}
        {children}
      </WrapperContent>
    </TopSectionSC>
  )
}

const SectionTopShortContainer = styled.div`
  position: relative;
  padding-bottom: ${spacings.space80}px;
  ${mq.b768} {
    padding-bottom: ${spacings.space120}px;
  }
`

export const SectionTopShort: React.FC = () => {
  return (
    <SectionTopShortContainer>
      <LogoAndMenu />
    </SectionTopShortContainer>
  )
}

const SectionContainerBook = styled.div`
  background-color: ${colors.darkBlue};
  position: relative;
`

export const SectionTopBooks: React.FC = ({ children }) => {
  return (
    <SectionContainerBook>
      <WrapperContent>
        <LogoAndMenu />
        {children}
      </WrapperContent>
    </SectionContainerBook>
  )
}

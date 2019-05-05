import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, fontFamily, urls } from "../constants"
import { Menu } from "../layout/menu"
import { TopSection, WrapperContent } from "."
import { MarkdownContainer } from "../components"
import LogoJan from "../images/logo-jan.svg"

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
  bottom: 15%;
`

const TopSectionSC = styled(TopSection)`
  display: flex;
`

const LogoMenuContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8%;
`

export const SectionTop: React.FC<IProps> = ({
  background,
  isHome = false,
  claim,
  children,
}) => {
  return (
    <TopSectionSC background={background || ""}>
      <WrapperContent>
        <LogoMenuContainerSC>
          <HomePageTitle>
            <Link to={urls.home}>
              <LogoJan />
            </Link>
          </HomePageTitle>
          <Menu />
        </LogoMenuContainerSC>
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
  height: 400px;
`

export const SectionTopShort: React.FC = () => {
  return (
    <SectionTopShortContainer>
      <WrapperContent>
        <LogoMenuContainerSC>
          <HomePageTitle>
            <Link to={urls.home}>
              <LogoJan />
            </Link>
          </HomePageTitle>
          <Menu /> 
        </LogoMenuContainerSC>
      </WrapperContent>
    </SectionTopShortContainer>
  )
}

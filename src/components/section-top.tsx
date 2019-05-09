import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, fontFamily, urls } from "../constants"
import { Menu } from "../layout/menu"
import { WrapperContent } from "./wrappers"
import { TopSection } from "./top-section"
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
  padding-top: 8%;
`

const LogoAndMenu: React.FC = () => {
  return (
    <LogoMenuContainerSC>
      <HomePageTitle>
        <Link to={urls.home}>
          <LogoJan />
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
    <TopSectionSC background={background || ""}>
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
  height: 400px;
`

export const SectionTopShort: React.FC = () => {
  return (
    <SectionTopShortContainer>
      <WrapperContent>
        <LogoAndMenu />
      </WrapperContent>
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

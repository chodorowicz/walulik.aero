import * as React from "react"
import styled from "@emotion/styled"
import { useWindowSize, useWindowScrollPosition } from "../utils"

import {
  colors,
  fontSizes,
  fontFamily,
  mq,
  spacings,
  breaksMap,
} from "../constants"
import { Menu } from "../layout/menu"
import { WrapperContent } from "./wrappers"
import { TopSectionBackground } from "./top-section-background"
import { MarkdownContainer } from "../components"

interface IProps {
  background?: string
  isHome: boolean
  claim?: string
}

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

const TopSectionSC = styled(TopSectionBackground)`
  display: flex;
  background-position: ${props => props.theme.centeringSmall || "center right"};
  ${mq.b1024} {
    background-position: ${props => props.theme.centeringBig || "center right"};
  }
`

const LogoMenuContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding-top: ${spacings.space30}px; */
  ${mq.b768} {
    /* padding-top: ${spacings.space60}px; */
  }
`

const WrapperSticky = styled.div<{ isSticky: boolean; offset: number }>`
  position: ${props => (props.isSticky ? "fixed" : "absolute")};
  background-color: ${props =>
    props.isSticky ? colors.darkBlue : "transparent"};
  top: ${props => (props.isSticky ? "0px" : `${props.offset}px;`)};
  z-index: 4;
  width: 100%;
  transition: background-color 200ms;
`

export const LogoAndMenu: React.FC = () => {
  const { y } = useWindowScrollPosition()
  const { innerWidth } = useWindowSize()
  const offset = innerWidth >= breaksMap.b768 ? 40 : 20
  const isSticky = y > offset

  return (
    <WrapperSticky isSticky={isSticky} offset={offset}>
      <WrapperContent>
        <LogoMenuContainerSC>
          <Menu isSticky={isSticky} />
        </LogoMenuContainerSC>
      </WrapperContent>
    </WrapperSticky>
  )
}

export const SectionTop: React.FC<IProps> = ({
  background,
  isHome = false,
  claim,
  children,
}) => {
  return (
    <TopSectionSC
      background={background || ""}
    >
      <WrapperContent>
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
  /* padding-bottom: ${spacings.space80}px; */
  padding-bottom: 110px;
  ${mq.b768} {
    padding-bottom: 150px;
  }
`

export const SectionTopShort: React.FC = () => {
  return <SectionTopShortContainer />
}

const SectionContainerBook = styled.div`
  background-color: ${colors.darkBlue};
  position: relative;
`

export const SectionTopBooks: React.FC = ({ children }) => {
  return (
    <SectionContainerBook>
      <WrapperContent>{children}</WrapperContent>
    </SectionContainerBook>
  )
}

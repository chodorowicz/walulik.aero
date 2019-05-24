import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import MediaQuery from "react-responsive"

import {
  colors,
  fontSizes,
  fontWeight,
  fontFamily,
  urls,
  breakPoints,
  spacings,
} from "../constants"
import VegeBurger from "../images/vege-burger.svg"
import Close from "../images/close.svg"
import LogoJanSmall from "../images/logo-small.svg"

const MenuWrapper = styled.nav`
  font-size: ${fontSizes.medium}px;
  font-family: ${fontFamily.montserrat};
  color: ${colors.accent};
  font-weight: ${fontWeight.bold};
  margin: 0;
  display: flex;
`

const StyledLink = styled(Link)`
  color: ${colors.accent};
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &:hover,
  &.active {
    text-decoration: underline;
    color: ${props => (props.theme.lightMenu ? colors.accent : colors.white)};
  }
`

const MobileMenu = styled.div`
  background-color: ${colors.darkBlue};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: ${fontSizes.mediumLarge}px;
  font-family: ${fontFamily.montserrat};
  color: ${colors.accent};
  font-weight: ${fontWeight.bold};
  padding-left: ${spacings.space20}px;
  padding-right: ${spacings.space20}px;
  padding-bottom: ${spacings.space20}px;

  ${StyledLink} {
    margin-bottom: ${spacings.space20}px;
  }
`

const LogoJanSmallSC = styled(LogoJanSmall)`
  z-index: 3;
  position: fixed;
  left: ${spacings.space20}px;
`

const VegeBurgerContainer = styled.div`
  cursor: pointer;
`

const CloseContainer = styled("div")`
  z-index: 3;
  position: fixed;
  right: ${spacings.space20}px;
  /* top: ${spacings.space30 + 5}px; */
  cursor: pointer;
`

const commonLinkProps = {
  activeClassName: "active",
  partiallyActive: true,
}

const Links: React.FC = () => {
  return (
    <>
      <StyledLink to={urls.about} {...commonLinkProps}>
        About
      </StyledLink>
      <StyledLink to={urls.books} {...commonLinkProps}>
        Books
      </StyledLink>
      <StyledLink to={urls.researchPapers} {...commonLinkProps}>
        Research papers
      </StyledLink>
      <StyledLink to={urls.contact} {...commonLinkProps}>
        Contact
      </StyledLink>
    </>
  )
}

export const Menu: React.FC = () => {
  const [isMenuOpened, setMenuOpened] = React.useState(false)
  return (
    <>
      <MediaQuery maxDeviceWidth={breakPoints.b768}>
        <VegeBurgerContainer>
          <VegeBurger onClick={() => setMenuOpened(true)} />
        </VegeBurgerContainer>
        {isMenuOpened && (
          <>
            <LogoJanSmallSC />
            <CloseContainer
              onClick={() => {
                setMenuOpened(false)
              }}
            >
              <Close />
            </CloseContainer>
          </>
        )}
        {isMenuOpened && <MobileMenu><Links /></MobileMenu>}
      </MediaQuery>
      <MediaQuery minDeviceWidth={breakPoints.b768}>
        <MenuWrapper>
          <Links />
        </MenuWrapper>
      </MediaQuery>
    </>
  )
}

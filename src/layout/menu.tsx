import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import MediaQuery from "react-responsive"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

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
import LogoJan from "../images/logo-jan.svg"
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
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
      color: ${props => (props.theme.lightMenu ? colors.accent : colors.white)};
    }
  }
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
  height: calc(var(--vh, 1vh) * 100);
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

  /* font on very small screens (horizontal iPhone) needs to be smaller */
  font-size: ${fontSizes.medium}px;

  @media(min-height: 400px) {
    font-size: ${fontSizes.size28}px;
  }
  
  @media(min-height: 500px) {
    font-size: ${fontSizes.mediumLarge}px;
  }

  ${StyledLink} {
    margin-bottom: 10px;
    @media(min-height: 500px) {
      margin-bottom: ${spacings.space20}px;
    }
  }
`

const topPadding = 30;

const LogoJanSmallSC = styled.div`
  z-index: 3;
  position: fixed;
  top: ${topPadding}px;
  left: ${spacings.space20}px;
`

const VegeBurgerContainer = styled.div`
  padding: 10px;
  cursor: pointer;
`

const CloseContainer = styled("div")`
  z-index: 3;
  position: fixed;
  top: ${topPadding}px;
  right: ${spacings.space20}px;
  /* top: ${spacings.space30 + 5}px; */
  cursor: pointer;
`

const HomePageTitle = styled.h2`
  margin: 0;
`

const commonLinkProps = {
  activeClassName: "active",
  partiallyActive: true,
}

interface Props {
  setMenuOpened: (x: boolean) => void;
}

const Links: React.FC<Props> = ({ setMenuOpened }) => {
  const onClick = () => setMenuOpened(false);
  return (
    <>
      <StyledLink to={urls.about} onClick={onClick} {...commonLinkProps}>
        About 
      </StyledLink>
      <StyledLink to={urls.books} onClick={onClick} {...commonLinkProps}>
        Books
      </StyledLink>
      <StyledLink to={urls.researchPapers} onClick={onClick} {...commonLinkProps}>
        Research papers
      </StyledLink>
      <StyledLink to={urls.contact} onClick={onClick} {...commonLinkProps}>
        Contact
      </StyledLink>
    </>
  )
}

export const Menu: React.FC<{ isSticky: boolean }> = (props) => {
  const { isSticky = false } = props;
  const [isMenuOpened, setMenuOpened] = React.useState(false);
  const menuRef = React.useRef<HTMLInputElement>(null);

  // disable screen scroll when menu is opened, this solves layout issues
  const setMenuVisibility = (isVisible: boolean) => {
    setMenuOpened(isVisible);
    window.setTimeout(() => {
      const element = menuRef.current;
      if (isVisible && element !== null) {
        disableBodyScroll(element);
        element.ontouchmove = (e) => { e.preventDefault(); return false; };
      }
    }, 300);
    clearAllBodyScrollLocks();
  }

  // clean up scroll lock when navigating to another menu via link, HomePageTitle link
  React.useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <>
      {!isMenuOpened && (
        <HomePageTitle>
          <Link to={urls.home} onClick={() => setMenuVisibility(false)}>
            <MediaQuery minDeviceWidth={breakPoints.b768}>
              {matches => ((matches && !isSticky) ? <LogoJan /> : <LogoJanSmall />)}
            </MediaQuery>
          </Link>
        </HomePageTitle>
      )}
      <MediaQuery maxDeviceWidth={breakPoints.b900 - 1}>
        {!isMenuOpened && (
          <VegeBurgerContainer>
            <VegeBurger onClick={() => setMenuVisibility(true)} />
          </VegeBurgerContainer>
        )}
        {isMenuOpened && (
          <>
            <LogoJanSmallSC>
              <Link to={urls.home}>
                <LogoJanSmall />
              </Link>
            </LogoJanSmallSC>
            <CloseContainer
              onClick={() => {
                setMenuVisibility(false)
              }}
            >
              <Close />
            </CloseContainer>
          </>
        )}
        {isMenuOpened && (
          <MobileMenu ref={menuRef}>
            <Links setMenuOpened={setMenuVisibility} />
          </MobileMenu>
        )}
      </MediaQuery>
      <MediaQuery minDeviceWidth={breakPoints.b900}>
        <MenuWrapper>
          <Links setMenuOpened={setMenuVisibility} />
        </MenuWrapper>
      </MediaQuery>
    </>
  )
}

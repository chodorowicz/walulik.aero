import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes, fontWeight, fontFamily, urls } from "../constants"

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
    color: ${props => props.theme.lightMenu ? colors.accent : colors.white};
  }
`

const commonLinkProps = {
  activeClassName: "active",
  partiallyActive: true,
}

export const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <StyledLink to={urls.about} {...commonLinkProps}>
        About
      </StyledLink>
      <StyledLink to={urls.books} {...commonLinkProps}>
        Books
      </StyledLink>
      <StyledLink to={urls.researchPapers} {...commonLinkProps}>
        Research papers
      </StyledLink>
    </MenuWrapper>
  )
}

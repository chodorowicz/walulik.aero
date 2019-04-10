import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core";

import { colors, fontSizes, fontWeight } from "../../constants"

const MenuWrapper = styled.nav`
  font-size: ${fontSizes.medium}px;
  color: ${colors.accent};
  font-weight: ${fontWeight.bold};
  margin: 0;
  position: absolute;
  top: 8%;
  right: 100px;
  display: flex;
`

const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  &:not(last-child) {
    margin-right: 40px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Menu: React.FC = () => {
  return <MenuWrapper>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/books">Books</StyledLink>
  </MenuWrapper>
}
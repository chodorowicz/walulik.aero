import styled from "@emotion/styled"
import { Link } from "gatsby"

import { colors, fontSizes } from "../constants";
import { transition } from "../styles"

export const Button = styled.button`
  border-radius: 30px;
  border: solid 3px ${colors.accent};
  background: transparent;
  padding: 12px 22px;
  font-size: ${fontSizes.small}px;
  color: ${colors.accent};
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: ${colors.white};
    background: ${colors.accent};
    ${transition};
    path, line {
      fill: ${colors.white};
      stroke: ${colors.white};
    }
  }
`;

export const LinkButton = styled(Button.withComponent(Link))`
  text-decoration: none;
`;

export const ButtonInner = styled.span`
  margin-right: 10px;
`;

export const ButtonInnerLeft = styled.span`
  margin-left: 10px;
`;

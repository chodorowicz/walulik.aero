import styled from "@emotion/styled"

import { fontSizes, colors } from "../constants";

export const SectionTitle = styled.h2`
  font-size: ${fontSizes.mediumLarge}px;
  color: ${colors.darkBlue};
  padding-bottom: 28px;
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    display: block;
    height: 7px;
    width: 2000px;
    background-color: ${colors.darkBlue};
    position: absolute;
    bottom: 0;
    right: 0;
  }
`
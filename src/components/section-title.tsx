import styled from "@emotion/styled"

import { Title } from "./text";
import { fontSizes, colors, fontFamily } from "../constants";

export const SectionTitle = styled(Title)`
  font-size: ${fontSizes.mediumLarge}px;
  color: ${colors.darkBlue};
  font-family: ${fontFamily.montserrat};
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
`;

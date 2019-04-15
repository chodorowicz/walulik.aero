import styled from "@emotion/styled"

import { colors, fontSizes, fontWeight, fontFamily } from "../constants"

export const Title = styled.h2`
  color: ${colors.darkBlue};
  font-size: ${fontSizes.mediumLarge}px;
  font-family: ${fontFamily.montserrat};
`;

export const Paragraph = styled.p`
  color: ${colors.darkBlue};
  font-size: 24px;
  line-height: 42px;
  font-family: 'Roboto', sans-serif;
  font-weight: ${fontWeight.light}
`;
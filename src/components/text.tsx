import styled from "@emotion/styled"

import { colors, fontSizes, fontWeight, fontFamily } from "../constants"

interface ITitle {
  color?: string;
}

export const Title = styled.h2<ITitle>`
  color: ${props => props.color || colors.darkBlue};
  font-size: ${fontSizes.mediumLarge}px;
  font-family: ${fontFamily.montserrat};
  margin-top: 0px;
`;


interface IParagraph {
  color?: string;
  fontSize?: number;
}

export const Paragraph = styled.p<IParagraph>`
  color: ${props => props.color || colors.darkBlue};
  font-size: ${props => props.fontSize || 24}px;
  line-height: 42px;
  font-family: 'Roboto', sans-serif;
  font-weight: ${fontWeight.light};

  a {
    color: ${colors.accent};
  }
`;

interface IStyledContent {
  color?: string;
}

export const StyledContent = styled.div<IStyledContent>`
  color: ${props => props.color || colors.darkBlue};
  font-size: ${fontSizes.size18}px;
  font-weight: ${fontWeight.light};
  line-height: 1.7em;

  h2 {
    &:first-child {
      margin-top: 0;
    }
    font-size: ${fontSizes.large}px;
    font-weight: ${fontWeight.normal400};
  }
`;

export const StyledCalloutContent = styled.div<IStyledContent>`
  color: ${props => props.color || colors.white};
  font-size: ${fontSizes.large}px;
  font-weight: ${fontWeight.light};
  line-height: 1.7em;

  h2 {
    &:first-child {
      margin-top: 0;
    }
    font-size: ${fontSizes.mediumLarge}px;
    font-weight: ${fontWeight.bold};
  }
`;

export const StyledContentPure = styled.div<IStyledContent>`
`

import React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes, fontFamily, fontWeight} from "../../constants";

const Box = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  font-size: ${fontSizes.small}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
  width: 300px;
`;

interface IProps {
  text: string;
}

export const PaperBox: React.FC<IProps> = ({ children, text }) => {
  return (
    <Box>{text}{children}</Box>
  )
}
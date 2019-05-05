import React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes, fontFamily, fontWeight } from "../../constants"

const Box = styled.div`
  background-color: ${colors.darkBlue};
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${colors.accent};
    transition: all ease 0.2s;
    svg, path {
      fill: #ffffff;
    }
  }
`

const Text = styled.div`
  position: absolute;
  bottom: 38px;
  text-align: center;
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.small}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};
`

const CenterElement = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 90px;
`

interface IProps {
  text: string
}

export const PaperBox: React.FC<IProps> = ({ children, text }) => {
  return (
    <Box>
      <CenterElement>{children}</CenterElement>
      <Text>{text}</Text>
    </Box>
  )
}

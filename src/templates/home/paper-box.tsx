import React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes, fontFamily, fontWeight, mq } from "../../constants"
import { transition } from "../../styles"

const Box = styled.div`
  background-color: ${colors.darkBlue};
  position: relative;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.accent};
      ${transition};
      svg,
      path {
        fill: #ffffff;
      }
    }
  }
`

const Text = styled.div`
  position: absolute;
  bottom: 38px;
  text-align: center;
  width: 100%;
  color: ${colors.white};
  font-size: ${fontSizes.medium}px;
  font-family: ${fontFamily.roboto};
  font-weight: ${fontWeight.bold};

  ${mq.b1024} {
    font-size: ${fontSizes.small}px;
  }
`

const CenterElement = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

interface IProps {
  text: string
  className?: string
}

export const PaperBox: React.FC<IProps> = ({ children, text, className }) => {
  return (
    <Box className={className}>
      <CenterElement>{children}</CenterElement>
      <Text>{text}</Text>
    </Box>
  )
}

import styled from "@emotion/styled"
import React from "react"

import { colors, fontSizes, fontWeight } from "../../../constants"

const CounterContainer = styled.div`
  display: flex;
`;

const CounterCurrent = styled.div`
  font-size: ${fontSizes.mediumLarge}px;
  color: ${colors.darkBlue};
  position: relative;
  display: inline-block;
  padding-right: 30px;
  font-weight: ${fontWeight.bold};
  &:after {
    content: "";
    background-color: ${colors.darkBlue};
    width: 3px;
    height: 70px;
    transform: rotate(20deg);
    transform-origin: top right;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const CounterAll = styled.div`
  font-size: ${fontSizes.mediumLarge}px;
  color: ${colors.darkBlue};
  opacity: 0.25;
  font-weight: ${fontWeight.bold};
  margin-top: 1ex;
`;

interface IProps {
  current: number;
  max: number;
}

export const CarouselCounter: React.FC<IProps> = ({ current, max}) => {
  return (
    <CounterContainer>
      <CounterCurrent>{current}</CounterCurrent>
      <CounterAll>{max}</CounterAll>
    </CounterContainer>
  )
}
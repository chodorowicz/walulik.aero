import styled from "@emotion/styled"

import { colors } from "../constants"

interface ITopSectionProps {
  background: string;
}

export const TopSectionBackground = styled.div<ITopSectionProps>`
  background-image: url("${props => props.background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: ${colors.darkBlue};
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  transition: all 0.2s linear;
`

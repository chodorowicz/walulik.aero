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
  min-height: 100vh;
  position: relative;
  padding-left: 100px;
  padding-right: 100px;
`

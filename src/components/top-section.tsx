import styled from "@emotion/styled"

interface ITopSectionProps {
  background: string;
}

export const TopSection = styled.div<ITopSectionProps>`
  background-image: url("${props => props.background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  position: relative;
  padding-left: 100px;
  padding-right: 100px;
`
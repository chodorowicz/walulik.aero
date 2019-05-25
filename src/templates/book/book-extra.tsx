import React from "react"
import styled from "@emotion/styled"

import { WrapperContent, StyledContent } from "../../components"
import { grid12 } from "../../styles"
import { colors } from "../../constants"

const Wrapper = styled.div`
  background-image:  url(${props => props.bgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  ${grid12};
`

const StyledContentLeft = styled(StyledContent)`
  grid-column: 2 / span 4;
`
const StyledContentRight = styled(StyledContent)`
  grid-column: 6 / span 5;
`

const WrapperContentSC = styled(WrapperContent)`
  background-image:  url(${props => props.bgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;
  background-position: center center;
`


export const BookExtra: React.FC<IProps> = (props) => {
  const { extraBg, extraContentRight, extraContentLeft  } = props
  const bgSrc = extraBg.childImageSharp.fluid.src

  return (
      <WrapperContentSC  bgSrc={bgSrc}>
        <Container>
          <StyledContentLeft dangerouslySetInnerHTML={{ __html: extraContentLeft }} color={colors.white} />
          <StyledContentRight dangerouslySetInnerHTML={{ __html: extraContentRight }} color={colors.white} />
        </Container>
      </WrapperContentSC>
  )
}

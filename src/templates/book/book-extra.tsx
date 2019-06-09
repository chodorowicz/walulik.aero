import React from "react"
import styled from "@emotion/styled"

import { WrapperContent, MarkdownContainerFull } from "../../components"
import { grid12 } from "../../styles"
import { colors } from "../../constants"

const Container = styled.div`
  ${grid12};
`

const StyledContentLeft = styled(MarkdownContainerFull)`
  grid-column: 2 / span 4;
`
const StyledContentRight = styled(MarkdownContainerFull)`
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
      <WrapperContentSC bgSrc={bgSrc} id="prize">
        <Container>
          <StyledContentLeft content={extraContentLeft} color={colors.white} stripTags={false} />
          <StyledContentRight content={extraContentRight} color={colors.white} stripTags={false} />
        </Container>
      </WrapperContentSC>
  )
}

import React from "react"
import styled from "@emotion/styled"

import { WrapperContent, StyledContent, Share } from "../../components"
import { grid12 } from "../../styles"
import { mq } from "../../constants"

const Container = styled.div`
  padding-top: 112px;
  padding-bottom: 112px;
  grid-gap: 20px;
  ${grid12};
`

const Social = styled(Share)`
  grid-column: 1 / span 12;
  margin-bottom: 20px;
  ${mq.b768} {
    margin-bottom: unset;
    grid-column: 11  / span 1;
  }
`

const Content = styled.div`
grid-column: 1 / span 12;
${mq.b768} {
  grid-row: 1;
  grid-column: 2 / span 8;
}
`

interface IProps {
  html: string
}

export const BookContent: React.FC<IProps> = ({ html }) => {
  return (
    <WrapperContent>
      <Container>
        <Social />
        <Content>
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
      </Container>
    </WrapperContent>
  )
}

import React from "react"
import styled from "@emotion/styled"

import { Button, ButtonInner, SectionTitle } from "../../components"
import Line from "../../images/line.inline.svg"
import { Carousel } from "./carousel/carousel"

const Wrapper = styled.div`
  position: relative;
  padding-left: 114px;
  padding-right: 114px;
  padding-top: 98px;
  padding-bottom: 98px;
  overflow: hidden;
`

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
`

export const SectionBooks: React.FC<any> = () => {
  return (
    <Wrapper>
      <SectionTitle>Books</SectionTitle>
      <Carousel />
      <BottomSection>
        <Button>
          <ButtonInner>see all books</ButtonInner>
          <Line />
        </Button>
      </BottomSection>
    </Wrapper>
  )
}

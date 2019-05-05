import React from "react"
import styled from "@emotion/styled"

import { LinkButton, ButtonInner, SectionTitle, WrapperContent } from "../../components"
import Line from "../../images/line.inline.svg"
import { Carousel } from "./carousel/carousel"
import { urls } from "../../constants"

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
      <WrapperContent>
        <SectionTitle>Books</SectionTitle>
        <Carousel />
        <BottomSection>
          <LinkButton to={urls.books}>
            <ButtonInner>see all books</ButtonInner>
            <Line />
          </LinkButton>
        </BottomSection>
      </WrapperContent>
    </Wrapper>
  )
}

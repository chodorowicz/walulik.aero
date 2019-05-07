import React from "react"
import styled from "@emotion/styled"

import { LinkButton, ButtonInner, SectionTitle, WrapperContent } from "../../components"
import Line from "../../images/line.inline.svg"
import { Carousel } from "./carousel/carousel"
import { urls, spacings } from "../../constants"

const Wrapper = styled.div`
  position: relative;
  padding-left: 114px;
  padding-right: 114px;
  padding-top: 98px;
  padding-bottom: 98px;
  overflow: hidden;
`

const WrapperContentSC = styled(WrapperContent)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
`

const TitleWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  margin-bottom: ${spacings.space80}px;
`

const CarouselWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  margin-bottom: ${spacings.space40}px;
`

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 13;
`

export const SectionBooks: React.FC<any> = () => {
  return (
    <Wrapper>
      <WrapperContentSC>
        <TitleWrapper><SectionTitle>Books</SectionTitle></TitleWrapper>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
        <BottomSection>
          <LinkButton to={urls.books}>
            <ButtonInner>see all books</ButtonInner>
            <Line />
          </LinkButton>
        </BottomSection>
      </WrapperContentSC>
    </Wrapper>
  )
}

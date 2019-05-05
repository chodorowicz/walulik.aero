import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import {
  Button,
  ButtonInnerLeft,
  WrapperContent,
  MarkdownContainer,
} from "../../components"
import LineLeft from "../../images/line-left.inline.svg"
import { CarouselArrowsLinks } from "../home/carousel/carousel-arrows"
import { colors, fontSizes, fontWeight } from "../../constants"

const StyledWrapperContent = styled(WrapperContent)`
  padding-top: 176px;
  height: calc(100vh - 176px);
`

const Container = styled.div`
  display: grid;
  grid-template-areas: "navigation book info";
  grid-template-columns: 2fr 5fr 5fr;
`

const BookNavigation = styled.div`
  grid-area: navigation;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BackButton = styled(Button)`
  margin-top: 20px;
`

const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const BookContainer = styled.div`
  grid-area: book;
`

const InfoContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
  font-size: ${fontSizes.size18};
  font-weight: ${fontWeight.light};
`

const TextTitle = styled.h2`
  font-size: ${fontSizes.medium}px;
  margin-bottom: 5px;
`;

interface IProps {
  fluid: any;
  text: string;
  title: string;
  nextLink: string;
  prevLink: string;
}

export const BookTop: React.FC<IProps> = ({ fluid, text, title, nextLink, prevLink }) => {
  return (
    <StyledWrapperContent>
      <Container>
        <BookNavigation>
          <div>
            <BackButton>
              <LineLeft />
              <ButtonInnerLeft>Books</ButtonInnerLeft>
            </BackButton>
          </div>
          <ArrowsContainer>
            <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
          </ArrowsContainer>
        </BookNavigation>
        <BookContainer>
          <Img fluid={fluid} />
        </BookContainer>
        <InfoContainer>
          <TextTitle>{title}</TextTitle>
          <MarkdownContainer content={text} />
        </InfoContainer>
      </Container>
    </StyledWrapperContent>
  )
}

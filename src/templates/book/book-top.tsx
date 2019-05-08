import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import {
  Button,
  ButtonInnerLeft,
  WrapperContent,
  MarkdownContainer,
  LinkButton,
} from "../../components"
import LineLeft from "../../images/line-left.inline.svg"
import { CarouselArrowsLinks } from "../home/carousel/carousel-arrows"
import { colors, fontSizes, fontWeight, urls } from "../../constants"
import { grid12 } from "../../styles"

const StyledWrapperContent = styled(WrapperContent)`
  padding-top: 176px;
  padding-bottom: 176px;
`

const Container = styled.div`
  display: grid;
  grid-template-areas: "navigation book info";
  grid-template-columns: 2fr 5fr 5fr;
  ${grid12};
`

const NavigationWrapper = styled.div`
  grid-column: 1 / span 3;
`

const BookNavigation = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const BackButton = styled(LinkButton)`
  margin-top: 20px;
`

const ArrowsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const BookContainer = styled.div`
  grid-column: 4 / span 4;
`

const InfoContainer = styled.div`
  grid-column: 8 / span 4;
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
`

interface IProps {
  fluid: any
  text: string
  title: string
  nextLink: string
  prevLink: string
}

export const BookTop: React.FC<IProps> = ({
  fluid,
  text,
  title,
  nextLink,
  prevLink,
}) => {
  return (
    <StyledWrapperContent>
      <Container>
        <NavigationWrapper>
          <BookNavigation>
            <div>
              <BackButton to={urls.books}>
                <LineLeft />
                <ButtonInnerLeft>Books</ButtonInnerLeft>
              </BackButton>
            </div>
            <ArrowsContainer>
              <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
            </ArrowsContainer>
          </BookNavigation>
        </NavigationWrapper>
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

import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import {
  WrapperContent,
  MarkdownContainer,
  AnimatedLink,
} from "../../components"
import { CarouselArrowsLinks } from "../home/carousel/carousel-arrows"
import { colors, fontSizes, fontWeight, urls, mq } from "../../constants"
import { grid12, paddingSides0 } from "../../styles"

const StyledWrapperContent = styled(WrapperContent)`
  padding-top: 150px;
  padding-bottom: 120px;
  ${paddingSides0};
  ${mq.b768} {
    padding-top: 180px;
    ${paddingSides0};
  }
`

const Container = styled.div`
  display: grid;
  grid-template-areas: "navigation book info";
  grid-template-columns: 2fr 5fr 5fr;
  ${grid12};
`

const NavigationWrapper = styled.div`
  grid-column: 1 / span 12;
  order: 3;
  ${mq.b768} {
    order: unset;;
    grid-column: 1 / span 3;
  }
`

const BookNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 50px;
  ${mq.b768} { 
    margin-top: unset;
    display: inline-flex;
    flex-direction: column;
  }
`

const ArrowsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const BookContainer = styled.div`
  grid-column: 1 / span 12;
  overflow: hidden;
  ${mq.b768} {
    grid-column: 4 / span 5;
  }
`

const BookContainerInner = styled.div`
  position: relative;
  right: -11%;
  margin-bottom: 30px;
  ${mq.b768} {
    margin-bottom: 0;
    right: 0;
  }
`

const InfoContainer = styled.div`
  grid-column: 9 / span 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
  font-size: ${fontSizes.size18};
  font-weight: ${fontWeight.light};
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-column: 9 / span 4;
  }
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
  extraBadge?: any;
}

const ExtraBadgeSC = styled.div`
  max-width: 100px;
  img {
    max-width: 100%;
  }
`

export const BookTop: React.FC<IProps> = ({
  fluid,
  text,
  title,
  nextLink,
  prevLink,
  extraBadge,
}) => {
  return (
    <StyledWrapperContent>
      <Container>
        <NavigationWrapper>
          <BookNavigation>
            <div>
              <AnimatedLink to={urls.books} direction="left">Books</AnimatedLink>
            </div>
            <ArrowsContainer>
              <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
            </ArrowsContainer>
          </BookNavigation>
        </NavigationWrapper>
        <BookContainer>
          <BookContainerInner>
            <Img fluid={fluid} />
          </BookContainerInner>
        </BookContainer>
        <InfoContainer>
          {extraBadge && <ExtraBadgeSC><img src={extraBadge.childImageSharp.fluid.src} /></ExtraBadgeSC>}
          <TextTitle>{title}</TextTitle>
          <MarkdownContainer content={text} />
        </InfoContainer>
      </Container>
    </StyledWrapperContent>
  )
}

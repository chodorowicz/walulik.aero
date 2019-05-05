import React from "react"
import styled from "@emotion/styled"

import { LinkButton, ButtonInnerLeft, StyledContent, Share } from "../../components"
import LineLeft from "../../images/line-left.inline.svg"
import { urls, fontSizes, colors } from "../../constants"
import { CarouselArrowsLinks } from "../home/carousel/carousel-arrows"

interface IProps {
  nextLink: string;
  prevLink: string;
  html: string;
  title: string;
  where: string;
  category: string;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "navigation content social";
  grid-template-columns: 3fr 7fr 2fr;
  grid-gap: 20px;
  padding-bottom: 120px;
`

const Navigation = styled.div`
  grid-area: navigation;
`

const ArrowsContainer = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  grid-area: content;
`

const BreadCrumbs = styled.div`
  font-size: ${fontSizes.size18}px;
  color: ${colors.grey2};
  padding-bottom: 50px;
`

const Social = styled.div`
  grid-area: social;
`

const StyledContentSC = styled(StyledContent)`
  padding-top: 50px;
`


export const Paper: React.FC<IProps> = ({ nextLink, prevLink, html, title, where, category }) => {
  return (
    <Wrapper>
      <Navigation>
        <LinkButton to={urls.researchPapers}>
          <LineLeft />
          <ButtonInnerLeft>Research Papers</ButtonInnerLeft>
        </LinkButton>
        <ArrowsContainer>
          <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
        </ArrowsContainer>
      </Navigation>
      <Content>
        <BreadCrumbs>Research papers > {category} ></BreadCrumbs>
        <StyledContent>
          <h2>{title}</h2>
          <p>{where}</p>
        </StyledContent>
        <StyledContentSC dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
      <Social><Share /></Social>
    </Wrapper>
  )
}

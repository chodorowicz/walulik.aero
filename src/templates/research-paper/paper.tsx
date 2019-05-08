import React from "react"
import styled from "@emotion/styled"

import {
  LinkButton,
  ButtonInnerLeft,
  StyledContent,
  Share,
} from "../../components"
import LineLeft from "../../images/line-left.inline.svg"
import { urls, fontSizes, colors } from "../../constants"
import { CarouselArrowsLinks } from "../home/carousel/carousel-arrows"
import { grid12 } from "../../styles"

interface IProps {
  nextLink: string
  prevLink: string
  html: string
  title: string
  where: string
  category: string
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "navigation content social";
  grid-template-columns: 3fr 7fr 2fr;
  grid-gap: 20px;
  padding-bottom: 120px;
  ${grid12};
`

const Navigation = styled.div`
  grid-column: 1 / span 3;
`

const NavigationInner = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`

const ArrowsContainer = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: flex-end;
`

const Content = styled.div`
  grid-column: 4 / span 7;
`

const BreadCrumbs = styled.div`
  font-size: ${fontSizes.size18}px;
  color: ${colors.grey2};
  padding-bottom: 50px;
`

const Social = styled.div`
  grid-column: 11 / span 2;
  margin-top: 73px; /* to align it with title */
`

const StyledContentTitleSC = styled(StyledContent)`
  padding-right: 50px;
`

const StyledContentSC = styled(StyledContent)`
  padding-top: 50px;
`

export const Paper: React.FC<IProps> = ({
  nextLink,
  prevLink,
  html,
  title,
  where,
  category,
}) => {
  return (
    <Wrapper>
      <Navigation>
        <NavigationInner>
          <LinkButton to={urls.researchPapers}>
            <LineLeft />
            <ButtonInnerLeft>Research Papers</ButtonInnerLeft>
          </LinkButton>
          <ArrowsContainer>
            <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
          </ArrowsContainer>
        </NavigationInner>
      </Navigation>
      <Content>
        <BreadCrumbs>Research papers > {category} ></BreadCrumbs>
        <StyledContentTitleSC>
          <h2>{title}</h2>
          <p>{where}</p>
        </StyledContentTitleSC>
        <StyledContentSC dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
      <Social>
        <Share />
      </Social>
    </Wrapper>
  )
}

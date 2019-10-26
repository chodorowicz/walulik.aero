import React from "react"
import styled from "@emotion/styled"
import MediaQuery from "react-responsive"

import {
  StyledContent,
  Share,
  AnimatedLink,
} from "../../components"
import { urls, fontSizes, colors, mq, breaksMap, spacings } from "../../constants"
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
  padding-bottom: 120px;
  ${grid12};
`

const Navigation = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1;
  ${mq.b768} {
    grid-column: 1 / span 3;
  }
`

const NavigationInner = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`

const ArrowsContainer = styled.div`
  margin-top: ${spacings.space30}px;
  display: flex;
  ${mq.b768} {
    margin-top: 130px;
    grid-column: 1 / span 3;
    justify-content: flex-end;
  }
`

const Content = styled.div`
  grid-row: 3;
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-row: 1;
    grid-column: 4 / span 7;
  }
`

const BreadCrumbs = styled.div`
  font-size: ${fontSizes.size18}px;
  color: ${colors.grey2};
  padding-bottom: 20px;
  padding-top: 150px;
  ${mq.b768} {
    padding-bottom: 50px;
    padding-top: 0;
  }
`

const Social = styled.div`
  grid-column: 1 / span 12;
  margin-top: ${spacings.space30}px;
  margin-bottom: ${spacings.space40}px;
  grid-row: 2;
  ${mq.b768} {
    margin-top: 73px;
    margin-bottom: 0;
    grid-row: 1;
    grid-column: 11 / span 2;
  }
`

const StyledContentTitleSC = styled(StyledContent)`
  ${mq.b768} {
    padding-right: 50px;
  }
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
          <AnimatedLink to={urls.researchPapers} direction="left">Research Papers</AnimatedLink>
          <MediaQuery minWidth={breaksMap.b768}>
            <ArrowsContainer>
              <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
            </ArrowsContainer>
          </MediaQuery>
        </NavigationInner>
      </Navigation>
      <Content>
        <BreadCrumbs>Research papers > {category} ></BreadCrumbs>
        <StyledContentTitleSC>
          <h2>{title}</h2>
          <MediaQuery maxWidth={breaksMap.b768 - 1}>
            <ArrowsContainer>
              <CarouselArrowsLinks nextLink={nextLink} prevLink={prevLink} />
            </ArrowsContainer>
            <Social>
              <Share />
            </Social>
          </MediaQuery>
          <p>{where}</p>
        </StyledContentTitleSC>
        <StyledContentSC dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
      <MediaQuery minWidth={breaksMap.b768}>
        <Social>
          <Share />
        </Social>
      </MediaQuery>
    </Wrapper>
  )
}

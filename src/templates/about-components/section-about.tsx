import React from "react"
import styled from "@emotion/styled"

import { colors, mq, spacings } from "../../constants"
import { gradient, grid12, paddingSides0 } from "../../styles"
import {
  Title,
  Paragraph,
  WrapperContent,
  ResponsiveStyledPageCallout,
  MarkdownContainerPure
} from "../../components"
import ImageAbout1 from "../../images/about-1@2x.jpg"
import ImageAbout2 from "../../images/about-2@2x.jpg"
import LogoCarsWzuw from "../../images/about/logo-cars-wzuw@2x.png"

const Wrapper = styled.div`
  ${gradient};
`

const WrapperContentFirstSC = styled(WrapperContent)`
  ${paddingSides0};
`

const StyledWrapperContent = styled(WrapperContent)`
  padding-top: 100px;
  padding-bottom: 100px;
  ${grid12};
  ${mq.b768} {
    padding-top: 165px;
    padding-bottom: 130px;
  }
`

const ImagesColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 70px;

  grid-column: 1 / span 12;
  grid-row: 2;
  max-width: 100%;
  img {
    max-width: 100%;
  }
  ${mq.b768} {
    grid-column: 2 / span 4;
    grid-row: 1;
  }
`

const TextColumn = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1;
  position: relative;
  margin-bottom: ${spacings.space50}px;
  ${mq.b768} {
    grid-column: 7 / span 5;
    grid-row: 1;
    margin-bottom: 0;
  }
`

const StyledTitleText = styled(Title)`
  display: inline-block;
  padding-bottom: 36px;
  border-bottom: 7px solid ${colors.darkBlue};
`

const StyledParagraphText = styled(Paragraph)`
  margin-bottom: ${spacings.space50}px;
  ${mq.b768} {
    margin-bottom: 108px;
  }
`

export const SectionAbout: React.FC = props => {
  const { about, researchTeaching } = props;

  return (
    <Wrapper>
      <WrapperContentFirstSC>
        <ResponsiveStyledPageCallout>
          <Title color={colors.white} style={{ marginBottom: "100px" }}>
            About
          </Title>
          <Paragraph color={colors.white}>{about}</Paragraph>
        </ResponsiveStyledPageCallout>
      </WrapperContentFirstSC>
      <StyledWrapperContent>
        <ImagesColumn>
          <img src={ImageAbout1} />
          <img src={ImageAbout2} />
        </ImagesColumn>
        <TextColumn>
          <StyledTitleText>Research &amp; teaching</StyledTitleText>
          <StyledParagraphText>
          <MarkdownContainerPure content={researchTeaching} />
          </StyledParagraphText>
          <img src={LogoCarsWzuw} />
        </TextColumn>
      </StyledWrapperContent>
    </Wrapper>
  )
}

import React from "react"
import styled from "@emotion/styled"

import { colors, mq, spacings, urls } from "../../constants"
import { grid12 } from "../../styles"
import {
  AnimatedLink,
  Title,
  Paragraph,
  WrapperContent,
} from "../../components"
import IkarCover from "../../images/about/cover_ikar@2x.png"

const Wrapper = styled.div`
  background-color: ${colors.darkBlue};
`

const StyledWrapperContent = styled(WrapperContent)`
  ${grid12};
  padding-top: 70px;
  padding-bottom: 110px;
  ${mq.b768} {
    padding-top: 130px;
    padding-bottom: 170px;
  }
`

const WrapperText = styled.div`
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-column: 2 / span 5;
  }
`

const WrapperImage = styled.div`
  grid-column: 1 / span 12;
  margin-top: ${spacings.space40}px;
  ${mq.b768} {
    margin-bottom: unset;
    grid-column: 8 / span 4;
  }
`

const StyledTitle = styled(Title)`
  color: ${colors.white};
`

const ContainerButton = styled.div`
  padding-top: ${spacings.space40}px;
  display: flex;
  justify-content: center;
  ${mq.b768} {
    padding-top: 80px;
    justify-content: flex-end;
  }
`

const ImageSC = styled.img`
  max-width: 100%;
`

export const SectionPublications: React.FC = () => (
  <Wrapper>
    <StyledWrapperContent>
      <WrapperText>
        <StyledTitle>Publications &amp; editorship</StyledTitle>
        <Paragraph color={colors.white}>
          He has published several <a href={urls.books}>books</a> and numerous research papers on air law, aviation policy and regulatory issues. Jan has been an editor of the Transport Series at <a href="https://ikar.wz.uw.edu.pl/" target="_blank">iKAR</a> (internet Quarterly on Antitrust and Regulation, ISSN 2299-5749), and a reviewer for several renowned transport journals.
        </Paragraph>
        <ContainerButton>
          <AnimatedLink to={urls.researchPapers}>See my research papers</AnimatedLink>
        </ContainerButton>
      </WrapperText>
      <WrapperImage>
        <ImageSC src={IkarCover} />
      </WrapperImage>
    </StyledWrapperContent>
  </Wrapper>
)

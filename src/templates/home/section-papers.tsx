import React from "react"
import styled from "@emotion/styled"
import slugify from "@sindresorhus/slugify"
import { Link } from "gatsby"

import { Title, Paragraph, WrapperContent } from "../../components"
import { colors, spacings, urls, mq } from "../../constants"
import { PaperBox } from "./paper-box"
import EconomicRegulation from "../../images/icon-economic.inline.svg"
import IconAirlineFinance from "../../images/icon-airline-finance.svg"
import IconSecurity from "../../images/icon-security.svg"
import IconCriminalLaw from "../../images/icon-criminal-law.svg"
import { grid12 } from "../../styles"

const Wrapper = styled.div`
  padding-top: 98px;
  padding-bottom: 134px;
  background-color: ${colors.grey};
`
const SectionGridSC = styled.div`
  ${grid12};
`

const WrapperText = styled.div`
  grid-column: 1 / span 12;
  ${mq.b768} {
    grid-column: 2 / span 10;
  }
`

const BoxWrapper = styled.div`
  margin-top: ${spacings.space80}px;
  display: grid;
  grid-gap: 30px;
  grid-column: 1 / span 12;

  ${grid12};
`
const LinkSC = styled(Link)`
  display: block;
  height: 380px;
  grid-column: 1 / span 12;

  ${mq.b768} {
    grid-column: 2 / span 10;
    &:nth-child(2n-1) {
      grid-column: 1 / span 6;
    }
    &:nth-child(2n) {
      grid-column: 7 / span 6;
    }
  };
  ${mq.b1024} {
    &:nth-child(2n-1), &:nth-child(2n) {
      grid-column: auto / span 3;
    }
  };
`

const PaperBoxSC = styled(PaperBox)`
  height: 100%;
`


const LinkedPaperBox: React.FC<{ section: string }> = ({
  children,
  section,
}) => {
  return (
    <LinkSC to={`/${urls.researchPapers}?section=${slugify(section)}#list`}>
      <PaperBoxSC text={section}>
        {children}
      </PaperBoxSC>
    </LinkSC>
  )
}

export const SectionPapers: React.FC<any> = (props) => {
  const { aboutResearchPapers } = props;
  return (
    <Wrapper>
      <WrapperContent>
        <SectionGridSC>
        <WrapperText>
          <Title>Research papers</Title>
          <Paragraph>
            {aboutResearchPapers}
          </Paragraph>
        </WrapperText>
        <BoxWrapper>
          <LinkedPaperBox section="Economic regulation">
            <EconomicRegulation />
          </LinkedPaperBox>
          <LinkedPaperBox section="Airline finance">
          <IconAirlineFinance />
          </LinkedPaperBox>
          <LinkedPaperBox section="Aviation safety">
            <IconSecurity />
          </LinkedPaperBox>
          <LinkedPaperBox section="Aviation security">
            <IconCriminalLaw />
          </LinkedPaperBox>
        </BoxWrapper>
        </SectionGridSC>
      </WrapperContent>
    </Wrapper>
  )
}

import React from "react"
import styled from "@emotion/styled"

import { colors, fontSizes } from "../../constants"
import {
  Button,
  Title,
  Paragraph,
  WrapperContent,
  SectionTitle,
} from "../../components"
import Line from "../../images/line.inline.svg"
import ImageEducation from "../../images/about/education@2x.png"

const Wrapper = styled.div`
  overflow: hidden;
`

const StyledWrapperContent = styled(WrapperContent)`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-gap: 40px;
  padding-top: 130px;
  padding-bottom: 190px;
`

const ColumnPhoto = styled.div``

const ColumnText = styled.div``

const StyledTitle = styled(Title)`
  color: ${colors.white};
`

const StyledPhoto = styled.img`
  position: relative;
  z-index: 1;
  margin-top: 80px;
`

const ContactBox = styled.div`
  position: relative;
  margin-top: 120px;
  &:after {
    content: "";
    position: absolute;
    z-index: 2;
    background-color: ${colors.darkBlue};
    top: -45px; 
    bottom: -45px;
    left: -140px; 
    right: -9999px; 
  }
`;

const ContactBoxInner = styled.div`
  position: relative;
  z-index: 3;
`;

export const SectionEducation: React.FC = () => (
  <Wrapper>
    <StyledWrapperContent>
      <ColumnPhoto>
        <StyledPhoto src={ImageEducation} />
      </ColumnPhoto>
      <ColumnText>
        <SectionTitle>
          Education <br /> &amp; distinctions
        </SectionTitle>
        <Paragraph>
          He graduated in law from University of Warsaw in 2007 (summa cum
          laude) and had received multiple scholar awards from the Minister of
          Education. Jan obtained his PhD degree in air law in 2011 and the{" "}
          <a href="#">prizewinning</a> print version of his thesis was named the
          best Polish monograph in law and economic regulation of network
          infrastructures.
        </Paragraph>
        <ContactBox>
          <ContactBoxInner>
            <Paragraph color={colors.white} fontSize={fontSizes.size28}>
              Jan can be contacted by email or on social media. Jan speaks
              English, Polish, German and Russian.
            </Paragraph>
            <Button>Contact Jan <Line /></Button>
          </ContactBoxInner>
        </ContactBox>
      </ColumnText>
    </StyledWrapperContent>
  </Wrapper>
)

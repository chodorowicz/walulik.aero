import React from "react"
import styled from "@emotion/styled"

import { colors, mq, spacings } from "../../constants";
import { gradient, grid12, paddingSides0 } from "../../styles";
import { Title, Paragraph, WrapperContent, ResponsiveStyledPageCallout } from "../../components";
import ImageAbout1 from "../../images/about-1@2x.jpg"
import ImageAbout2 from "../../images/about-2@2x.jpg"
import LogoCarsWzuw from "../../images/about/logo-cars-wzuw@2x.png";

const Wrapper = styled.div`
  ${gradient};
`;

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
`;

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
`;

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
`;

const StyledTitleText = styled(Title)`
  display: inline-block;
  padding-bottom: 36px;
  border-bottom: 7px solid ${colors.darkBlue};
`;

const StyledParagraphText = styled(Paragraph)`
  margin-bottom: ${spacings.space50}px;
  ${mq.b768} {
    margin-bottom: 108px;
  }
`;


export const SectionAbout: React.FC = () => (
  <Wrapper>
    <WrapperContentFirstSC>
      <ResponsiveStyledPageCallout>
        <Title color={colors.white} style={{ marginBottom: "100px" }}>About</Title>
        <Paragraph color={colors.white}>Jan has been specialising in aviation law and policy and in corporate law for over 10 years. He started his legal career at Weil in a commercial law department. Since 2008 he has been practicing individually as a business lawyer specialising in commercial law, aviation law, administrative law and tax law. Jan has successfully led numerous corporate restructuring projects, and has been active as an aviation expert in consulting and training projects for the industry and the government. He is a member of the Warsaw Bar Association.</Paragraph>
      </ResponsiveStyledPageCallout>
    </WrapperContentFirstSC>
    <StyledWrapperContent>
      <ImagesColumn>
        <img src={ImageAbout1} />
        <img src={ImageAbout2} />
      </ImagesColumn>
      <TextColumn>
        <StyledTitleText>Research &amp; teaching</StyledTitleText>
        <StyledParagraphText>Jan has also been a lecturer in air law at the <a href="uczelnia.sgh.waw.pl/en/Pages/default.aspx" target="_blank">Warsaw School of Economics</a> since 2012 and was an assistant professor at the <a href="https://www.cars.wz.uw.edu.pl/o_nas_gb.html" target="_blank">Centre for Antitrust and Regulatory Studies</a>, Faculty of Management, University of Warsaw, where he has headed the <a href="https://www.cars.wz.uw.edu.pl/laboratories-02.html" target="_blank">Civil Aviation Laboratory</a> since 2016. He is also a tutor at Polish National School of Public Administration.</StyledParagraphText>
        <img src={LogoCarsWzuw} />
      </TextColumn>
    </StyledWrapperContent>
  </Wrapper>
)

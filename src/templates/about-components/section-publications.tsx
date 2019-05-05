import React from "react"
import styled from "@emotion/styled"

import { colors } from "../../constants";
import { Button, Title, Paragraph, WrapperContent } from "../../components";
import IkarCover from "../../images/about/cover_ikar@2x.png";
import Line from "../../images/line.inline.svg";

const Wrapper = styled.div`
  background-color: ${colors.darkBlue};
`;

const StyledWrapperContent = styled(WrapperContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  padding-top: 130px;
  padding-bottom: 170px;
`;

const StyledTitle = styled(Title)`
  color: ${colors.white};
`;


const ContainerButton = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: flex-end;
`;


export const SectionPublications: React.FC = () => (
  <Wrapper>
    <StyledWrapperContent>
      <div>
        <StyledTitle>Publications &amp; editorship</StyledTitle>
        <Paragraph color={colors.white}>
          He has published several books and numerous <a href="#">research papers</a> on air law, aviation policy and regulatory issues. Jan has been an editor of the Transport Series at <a href="#">iKAR</a> (internet Quarterly on Antitrust and Regulation, ISSN 2299-5749), and a reviewer for several renowned transport <a href="#">journals</a>.
        </Paragraph>
        <ContainerButton><Button>See my research papers <Line /></Button></ContainerButton>
      </div>
      <div>
        <img src={IkarCover} />
      </div>
    </StyledWrapperContent>
  </Wrapper>
)
import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import {
  Button,
  ButtonInnerLeft,
  WrapperContent,
  MarkdownContainer,
  StyledContent
} from "../../components"
import LineLeft from "../../images/line-left.inline.svg"
import { CarouselArrows } from "../home/carousel/carousel-arrows"
import { colors, fontSizes, fontWeight } from "../../constants"
import LogoFacebook from "../../images/book/facebook.svg"
import LogoLinkedIn from "../../images/book/linkedin.svg"
import LogoTwitter from "../../images/book/twitter.svg"

// const StyledWrapperContent = styled(WrapperContent)`
//   padding-top: 176px;
//   height: calc(100vh - 176px);
// `

const Container = styled.div`
  display: grid;
  grid-template-areas: ". social content empty";
  grid-template-columns: 2fr 1fr 7fr 2fr;
  padding-top: 112px;
  padding-bottom: 112px;
  grid-gap: 20px;
`

const Social = styled.aside`
  grid-area: social;
`;


const Content = styled.div`
  grid-area: content;
`;

// const BookNavigation = styled.div`
//   grid-area: navigation;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `

// const BackButton = styled(Button)`
//   margin-top: 20px;
// `

// const ArrowsContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `

// const BookContainer = styled.div`
//   grid-area: book;
// `

// const InfoContainer = styled.div`
//   grid-area: info;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: ${colors.white};
//   font-size: ${fontSizes.size18};
//   font-weight: ${fontWeight.light};
// `

// const TextTitle = styled.h2`
//   font-size: ${fontSizes.medium}px;
//   margin-bottom: 5px;
// `;

const ShareTitle = styled.h3`
  margin-top: 0;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSizes.size15}px;
  color: ${colors.grey2};
`; 

const ShareLogosContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;
`;

interface IProps {
  html: string;
}

export const BookContent: React.FC<IProps> = ({ html }) => {
  return (
    <WrapperContent>
      <Container>
        <Social>
          <ShareTitle>Share:</ShareTitle>
          <ShareLogosContainer>
            <LogoFacebook />
            <LogoLinkedIn />
            <LogoTwitter />
          </ShareLogosContainer>
        </Social>
        <Content>
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
      </Container>
    </WrapperContent>
  )
}

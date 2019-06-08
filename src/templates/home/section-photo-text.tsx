import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import {
  Title,
  Paragraph,
  WrapperContentNoMobilePadding,
  AnimatedLink
} from "../../components"
import { gradient, grid12, paddingSides20 } from "../../styles"
import { breakPoints, spacings, mq, urls } from "../../constants"

const WrapperOuter = styled.div`
  ${gradient};
`

const Wrapper = styled.div`
  ${grid12};
`

const WrapperImageSC = styled.div`
  grid-column: 1 / span 12;
  padding-bottom: ${spacings.space80}px;
  align-self: center;
  @media (min-width: ${breakPoints.b768}px) {
    padding-bottom: 0;
    grid-column: 1 / span 4;
  }
  img {
    transform: scale(1.15);
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${paddingSides20};

  grid-column: 1 / span 12;
  padding-bottom: ${spacings.space40}px;
  @media (min-width: ${breakPoints.b768}px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: ${spacings.space150}px;
    padding-top: ${spacings.space150}px;
    grid-column: 6 / span 6;
  }
`

const ButtonContainerSC = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${spacings.space30}px;
  ${mq.b768} {
    margin-top: ${spacings.space60}px;
  }
`

export const SectonPhotoText: React.FC<any> = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "jan@2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <WrapperOuter>
      <WrapperContentNoMobilePadding>
        <Wrapper>
          <WrapperImageSC>
            <Img fluid={data.file.childImageSharp.fluid} />
          </WrapperImageSC>
          <TextContent>
            <Title>Jan Walulik</Title>
            <Paragraph>
              Attorney and researcher specialising in aviation law and policy and in commercial law for over 10 years. Active as an aviation expert in consulting and training projects for the industry and the government. Lecturer in air law; author, editor and reviewer of numerous publications on regulatory issues in aviation. Member of the Warsaw Bar Association.
            </Paragraph>
            <ButtonContainerSC>
              <AnimatedLink to={urls.about}>learn more</AnimatedLink>
            </ButtonContainerSC>
          </TextContent>
        </Wrapper>
      </WrapperContentNoMobilePadding>
    </WrapperOuter>
  )
}

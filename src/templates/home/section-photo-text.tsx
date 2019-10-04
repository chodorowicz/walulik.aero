import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import {
  Title,
  Paragraph,
  WrapperContentNoMobilePadding,
  AnimatedLink,
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
  padding-bottom: ${spacings.space40}px;
  align-self: center;
  text-align: center;
  img { 
    max-height: 95vh;
    max-width: 100%;
  }
  @media (min-width: ${breakPoints.b768}px) {
    padding-bottom: ${spacings.space80}px;
    padding-bottom: 0;
    grid-column: 1 / span 4;
    img {
      width: 100%;
      height: unset;
      transform: scale(1.15);
    }
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

export const SectonPhotoText: React.FC<any> = props => {
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

  const { about } = props
  return (
    <WrapperOuter>
      <WrapperContentNoMobilePadding>
        <Wrapper>
          <WrapperImageSC>
            <img
              src={data.file.childImageSharp.fluid.src}
            />
          </WrapperImageSC>
          <TextContent>
            <Title>Jan Walulik</Title>
            <Paragraph>{about}</Paragraph>
            <ButtonContainerSC>
              <AnimatedLink to={urls.about}>learn more</AnimatedLink>
            </ButtonContainerSC>
          </TextContent>
        </Wrapper>
      </WrapperContentNoMobilePadding>
    </WrapperOuter>
  )
}

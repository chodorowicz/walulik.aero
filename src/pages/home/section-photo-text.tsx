import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import { Title, Paragraph, Button } from "../../components";


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const TextContent = styled.div`
  background-image: linear-gradient(300deg, #d1d1d1, #f4f4f4);
  padding-left: 114px;
  padding-right: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
    <Wrapper>
      <Img fluid={data.file.childImageSharp.fluid} />
      <TextContent>
        <Title>Jan Walulik</Title>
        <Paragraph>Attorney and researcher specialising in aviation law and policy and in commercial law for over 10 years. Active as an aviation expert in consulting and training projects for the industry and the government. Lecturer in air law; author, editor and reviewer of numerous publications on regulatory issues in aviation. Member of the Warsaw Bar Association.</Paragraph>
        <div>
          <Button>learn more</Button>
        </div>
      </TextContent>
    </Wrapper>
  )
}

import React from "react"
import styled from "@emotion/styled"

import { fontSizes, colors } from "../../constants"

interface IBooks {
  source: string
  title: string
  publisher: string
}

const BookContainer = styled.div`
  margin-bottom: 80px;
`;

const BookImage = styled.img`
  max-width: 100%;
`

const Info = styled.div`
  font-size: ${fontSizes.size18};
  color: ${colors.darkBlue};
  text-align: center;
`

export const Book: React.FC<IBooks> = ({ source, title, publisher }) => {
  return (
    <BookContainer>
      <BookImage src={source} />
      <Info>
        <strong>{title}</strong><br />
        {publisher}
      </Info>
    </BookContainer>
  )
}

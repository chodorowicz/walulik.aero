import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { fontSizes, colors } from "../../constants"

interface IBooks {
  source: string
  title: string
  publisher: string
  url: string;
  classname?: string;
}

const BookContainer = styled.div`
  margin-bottom: 80px;
  margin-top: 80px;
`;

const BookImage = styled.img`
  max-width: 100%;
  margin-bottom: 30px;
`

const Info = styled.div`
  font-size: ${fontSizes.size18};
  color: ${colors.darkBlue};
  text-align: center;
`

export const Book: React.FC<IBooks> = ({ source, title, publisher, url, classname }) => {
  return (
    <BookContainer className={classname}>
      <Link to={url}><BookImage src={source} /></Link>
      <Info>
        <strong>{title}</strong><br />
        {publisher}
      </Info>
    </BookContainer>
  )
}

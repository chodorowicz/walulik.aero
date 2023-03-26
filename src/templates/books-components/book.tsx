import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { fontSizes, colors, mq } from "../../constants"

interface IBooks {
  source: string
  title: string
  publisher: string
  url: string;
  className?: string;
  extraBadge?: any;
}

const BookContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  ${mq.b768} {
    margin-bottom: 80px;
    margin-top: 80px;
  }
`;

const BookImage = styled.img`
  max-width: 100%;
  margin-bottom: 30px;
  position: relative;
  right: -11%;
`

const Info = styled.div`
  font-size: ${fontSizes.size18};
  color: ${colors.darkBlue};
  text-align: center;
`

const ExtraBadgeSC = styled.div`
  max-width: 95px;
  position: absolute;
  right: 0;
  top: -30px;
  z-index: 1;
  img {
    max-width: 100%;
  }
`

export const Book: React.FC<IBooks> = ({ source, title, publisher, url, className, extraBadge }) => {
  return (
    <BookContainer className={className}>
      {extraBadge && <ExtraBadgeSC><img src={extraBadge.childImageSharp.fluid.src} /></ExtraBadgeSC>}
      <Link to={`/${url}`}><BookImage src={source} /></Link>
      <Info>
        <strong>{title}</strong><br />
        Publisher: {publisher}
      </Info>
    </BookContainer>
  )
}

import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"

import { colors } from "../../../constants"
import Line from "../../../images/line.inline.svg";
import LineLeft from "../../../images/line-left.inline.svg";

const CircleWithIcon = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  border: solid 3px ${colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const CircleWithIconTop = styled(CircleWithIcon)`
  margin-bottom: 30px;
`;

const CircleWithIconLink = CircleWithIcon.withComponent(Link);
const CircleWithIconLinkTop = CircleWithIconTop.withComponent(Link);

interface IProps {
  prev: () => void;
  next: () => void;
}

interface IPropsLinks {
  prevLink?: string;
  nextLink?: string;
}

export const CarouselArrows: React.FC<IProps> = ({ next, prev }) => {
  return (
    <div>
      <CircleWithIconTop onClick={next}><Line /></CircleWithIconTop>
      <CircleWithIcon onClick={prev}><LineLeft /></CircleWithIcon>
    </div>
  )
}

export const CarouselArrowsLinks: React.FC<IPropsLinks> = ({ nextLink = "", prevLink = "" }) => {
  return (
    <div>
      <CircleWithIconLinkTop to={nextLink}><Line /></CircleWithIconLinkTop>
      <CircleWithIconLink to={prevLink}><LineLeft /></CircleWithIconLink>
    </div>
  )
}
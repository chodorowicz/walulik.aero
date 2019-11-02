import styled from "@emotion/styled"
import React, { useState } from "react"
import { Link } from "gatsby"
import posed from "react-pose"

import { colors, mq, spacings } from "../../../constants"
import Line from "../../../images/line.inline.svg"
import LineLeft from "../../../images/line-left.inline.svg"
import { useWindowSize, checkHover } from "../../../utils"

const CircleWithIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 3px ${colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
  @media (hover: hover) {
    &:hover {
      background-color: ${colors.accent};
      path,
      line {
        stroke: ${colors.white};
      }
    }
  }
  ${mq.b768} {
    width: 69px;
    height: 69px;
    margin-right: 0;
    margin-bottom: ${spacings.space20}px;
  }
`

const ArrowsContainer = styled.div`
  display: flex;
  ${mq.b768} {
    flex-direction: column;
  }
`

interface IProps {
  prev: () => void
  next: () => void
}

interface IPropsLinks {
  prevLink?: string
  nextLink?: string
}

const transitionPose = {
  duration: 300,
}

const AnimatedArrowRight = posed.div({
  active: { x: 60, transition: transitionPose },
  default: { x: 0, transition: transitionPose },
})
const AnimatedArrowAppear = posed.div({
  hidden: { x: -160, transition: transitionPose },
  visible: { x: ({ isMobile }: { isMobile: boolean}) => isMobile ? 0 : 15, transition: transitionPose },
})

const AnimatedArrowAppearSC = styled(AnimatedArrowAppear)`
  position: absolute;
  left: 0;
`

const AnimatedCircleRight: React.FC<{ onClick?: any }> = props => {
  const [isHover, setHover] = useState(false)
  const size = useWindowSize();
  const isMobile = size.innerWidth <= 768;
  const displayHoverEffect = isHover && checkHover();

  return (
    <CircleWithIcon
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatedArrowAppearSC pose={displayHoverEffect ? "visible" : "hidden"} isMobile={isMobile}>
        <Line />
      </AnimatedArrowAppearSC>
      <AnimatedArrowRight pose={displayHoverEffect ? "active" : "default"} isMobile={isMobile}>
        <Line />
      </AnimatedArrowRight>
    </CircleWithIcon>
  )
}

const AnimatedArrowLeft = posed.div({
  active: { x: -60, transition: transitionPose },
  default: { x: 0, transition: transitionPose },
})
const AnimatedArrowAppear2 = posed.div({
  hidden: { x: 160, transition: transitionPose },
  visible: { x: ({ isMobile }: { isMobile: boolean}) => isMobile ? 0 : 15, transition: transitionPose },
})

const AnimatedArrowAppearSC2 = styled(AnimatedArrowAppear2)`
  position: absolute;
  left: 0;
`

const AnimatedCircleLeft: React.FC<{ onClick?: any }> = props => {
  const [isHover, setHover] = useState(false)
  const size = useWindowSize();
  const isMobile = size.innerWidth <= 768;
  const displayHoverEffect = isHover && checkHover();

  return (
    <CircleWithIcon
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatedArrowAppearSC2 pose={displayHoverEffect ? "visible" : "hidden"} isMobile={isMobile}>
        <LineLeft />
      </AnimatedArrowAppearSC2>
      <AnimatedArrowLeft pose={displayHoverEffect ? "active" : "default"}>
        <LineLeft />
      </AnimatedArrowLeft>
    </CircleWithIcon>
  )
}

const CircleWithIconTop = styled(AnimatedCircleRight)`
  order: 2;
  ${mq.b768} {
    margin-bottom: 30px;
  }
`

export const CarouselArrows: React.FC<IProps> = ({ next, prev }) => {
  return (
    <ArrowsContainer>
      <CircleWithIconTop onClick={next} />
      <AnimatedCircleLeft onClick={prev} />
    </ArrowsContainer>
  )
}

export const CarouselArrowsLinks: React.FC<IPropsLinks> = ({
  nextLink = "",
  prevLink = "",
}) => {
  return (
    <ArrowsContainer>
      <Link to={prevLink}><AnimatedCircleLeft /></Link>
      <Link to={nextLink}><CircleWithIconTop /></Link>
    </ArrowsContainer>
  )
}

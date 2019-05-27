import styled from "@emotion/styled"
import { Link } from "gatsby"
import posed from "react-pose"
import { useState } from "react"

import { colors, fontSizes } from "../constants"
import { transition } from "../styles"
import Line from "../images/line.inline.svg"
import LineLeft from "../images/line-left.inline.svg"

export const Button = styled.button`
  border-radius: 30px;
  border: solid 3px ${colors.accent};
  background: transparent;
  padding: 12px 22px;
  font-size: ${fontSizes.small}px;
  color: ${colors.accent};
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${colors.white};
    background: ${colors.accent};
    ${transition};
    path,
    line {
      stroke: ${colors.white};
    }
  }
`

const LinkSC = styled(Link)`
  &,
  &:hover {
    text-decoration: none;
  }
`

const transitionPose = {
  duration: 300,
}

const ArrowContainerLeft = posed.div({
  hidden: { x: -60, transition: transitionPose,},
  visible: { x: -10, transition: transitionPose,},
})

const ButtonPose = posed.div({
  hidden: { x: 0, transition: transitionPose,},
  visible: { x: 30, transition: transitionPose,},
})
const ArrowContainer = posed.div({
  hidden: { x: 100, transition: transitionPose,},
  visible: { x: 0, transition: transitionPose,},
})

export const AnimatedButtonRight: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const [isHover, setHover] = useState(false)
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
    >
      <ArrowContainerLeft
        pose={isHover ? "visible" : "hidden"}
        style={{ position: "absolute" }}
      >
        <Line />
      </ArrowContainerLeft>
      <ButtonPose pose={isHover ? "visible" : "hidden"}>
        <ButtonInner>{children}</ButtonInner>
      </ButtonPose>
      <ArrowContainer pose={isHover ? "hidden" : "visible"}>
        <Line />
      </ArrowContainer>
    </Button>
  )
}

const ArrowContainerAppear = posed.div({
  hidden: { opacity: 1, x: 60, transition: transitionPose,},
  visible: { opacity: 1, x: -10, transition: transitionPose,},
  
})

const ButtonPoseRight = posed.div({
  hidden: { opacity: 1, x: 0 , transition: transitionPose,},
  visible: { opacity: 1, x: -30, transition: transitionPose, },
})
const ArrowContainerRight = posed.div({
  hidden: { opacity: 1, x: -100, transition: transitionPose, },
  visible: { opacity: 1, x: 0, transition: transitionPose, },
})

export const AnimatedButtonLeft: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const [isHover, setHover] = useState(false)
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
    >
      <ArrowContainerRight pose={isHover ? "hidden" : "visible"}>
        <LineLeft />
      </ArrowContainerRight>
      <ButtonPoseRight pose={isHover ? "visible" : "hidden"}>
        <ButtonInnerLeft>{children}</ButtonInnerLeft>
      </ButtonPoseRight>
      <ArrowContainerAppear
        pose={isHover ? "visible" : "hidden"}
        style={{ position: "absolute", right: 0 }}
      >
        <LineLeft />
      </ArrowContainerAppear>
    </Button>
  )
}

export const AnimatedLink: React.FC<{ to: string; direction?: string }> = ({
  children,
  to,
  direction = "right",
}) => {
  return (
    <LinkSC to={to}>
      {direction === "right" ? (
        <AnimatedButtonRight>{children}</AnimatedButtonRight>
      ) : (
        <AnimatedButtonLeft>{children}</AnimatedButtonLeft>
      )}
    </LinkSC>
  )
}

export const LinkButton = styled(Button.withComponent(Link))`
  text-decoration: none;
`

export const ButtonInner = styled.span`
  margin-right: 10px;
`

export const ButtonInnerLeft = styled.span`
  margin-left: 10px;
`

import React from "react";
import posed, { PoseGroup } from "react-pose";

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;
    const delay = 300;

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        delay: delay,
        // filter: "blur(0px)",
        // delay: timeout,
        beforeChildren: delay
      },
      exit: {
        opacity: 0
        // filter: "blur(10px)",
      }
    });

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;

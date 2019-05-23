import * as React from 'react';

import { colors } from "../../constants"

const Facebook: React.FC = (): JSX.Element => {
  const [isHover, setHover] = React.useState(false);
  const bg = isHover ? colors.accent : colors.grey;
  const fg = isHover ? colors.whiteOff : colors.darkBlue;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46.095" height="46.095" viewBox="0 0 46.095 46.095" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <g id="Group_28" data-name="Group 28" transform="translate(-299 -1013.219)">
        <path id="Path_177" data-name="Path 177" d="M255.289,473.619H216a3.355,3.355,0,0,0-3.406,3.3v39.489a3.356,3.356,0,0,0,3.406,3.3h39.285a3.355,3.355,0,0,0,3.4-3.3V476.922A3.354,3.354,0,0,0,255.289,473.619Z" transform="translate(86.402 539.6)" fill={bg} />
        <path id="Path_178" data-name="Path 178" d="M254.5,505.324c.011.174.011.349.011.525a11.457,11.457,0,0,1-11.536,11.536v0a11.477,11.477,0,0,1-6.215-1.821,8.352,8.352,0,0,0,.967.056,8.14,8.14,0,0,0,5.037-1.732,4.059,4.059,0,0,1-3.789-2.818,4.051,4.051,0,0,0,1.832-.069,4.057,4.057,0,0,1-3.245-3.975v-.052a4.028,4.028,0,0,0,1.827.509,4.058,4.058,0,0,1-1.253-5.413A11.512,11.512,0,0,0,246.5,506.3a4.058,4.058,0,0,1,6.909-3.7,8.119,8.119,0,0,0,2.575-.984,4.072,4.072,0,0,1-1.782,2.244,8.107,8.107,0,0,0,2.328-.639A8.248,8.248,0,0,1,254.5,505.324Z" transform="translate(75.335 526.91)" fill={fg}/>
      </g>
    </svg>
  );
};

export default Facebook;




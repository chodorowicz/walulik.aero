import * as React from 'react';

import { colors } from "../../constants"

const LinkedIn: React.FC = (): JSX.Element => {
  const [isHover, setHover] = React.useState(false);
  const bg = isHover ? colors.accent : colors.grey;
  const fg = isHover ? colors.whiteOff : colors.darkBlue;

  return (

    <svg width="46.095" height="46.095" viewBox="0 0 46.095 46.095" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <g id="Group_29" data-name="Group 29" transform="translate(-299 -948.109)">
        <path id="Path_175" data-name="Path 175" d="M255.289,353.5H216a3.355,3.355,0,0,0-3.406,3.3v39.489A3.357,3.357,0,0,0,216,399.6h39.285a3.355,3.355,0,0,0,3.4-3.3V356.8A3.353,3.353,0,0,0,255.289,353.5Z" transform="translate(86.402 594.608)" fill={bg}/>
        <g id="Group_27" data-name="Group 27" transform="translate(312.175 962.095)">
          <rect id="Rectangle_22" data-name="Rectangle 22" width="4.144" height="12.382" transform="translate(0.246 5.97)" fill={fg}/>
          <path id="Path_179" data-name="Path 179" d="M239.249,379.3a2.146,2.146,0,1,0-.054,4.278h.028a2.147,2.147,0,1,0,.026-4.278Z" transform="translate(-236.905 -379.303)" fill={fg}/>
          <path id="Path_180" data-name="Path 180" d="M257.106,389.779a4.113,4.113,0,0,0-3.733,2.047V390.07h-4.142c.054,1.162,0,12.382,0,12.382h4.142v-6.916a2.76,2.76,0,0,1,.138-1,2.263,2.263,0,0,1,2.125-1.506c1.5,0,2.1,1.136,2.1,2.8v6.624h4.142v-7.1C261.876,391.548,259.832,389.779,257.106,389.779Z" transform="translate(-242.55 -384.101)" fill={fg}/>
        </g>
      </g>
    </svg>
  );
};

export default LinkedIn;


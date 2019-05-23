import * as React from 'react';

import { colors } from "../../constants"

const Facebook: React.FC = (): JSX.Element => {
  const [isHover, setHover] = React.useState(false);
  const bg = isHover ? colors.accent : colors.grey;
  const fg = isHover ? colors.whiteOff : colors.darkBlue;

  return (
    <svg width="46.095" height="46.095" viewBox="0 0 46.095 46.095" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <g id="Group_30" data-name="Group 30" transform="translate(-299 -883)">
        <rect id="Rectangle_21" data-name="Rectangle 21" width="46.095" height="46.095" rx="4.694" transform="translate(299 883)" fill={bg}/>
        <path id="Path_176" data-name="Path 176" d="M246.838,277.875v-11.6h-3.9v-4.522h3.9v-3.335c0-3.87,2.363-5.977,5.816-5.977a32.144,32.144,0,0,1,3.489.178v4.045h-2.394c-1.878,0-2.241.892-2.241,2.2v2.887h4.478l-.583,4.522h-3.9v11.6Z" transform="translate(72.51 640.89)" fill={fg}/>
      </g>
    </svg>
  );
};

export default Facebook;


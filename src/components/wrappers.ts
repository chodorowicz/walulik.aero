import styled from "@emotion/styled"

import { sizes, mq, spacings } from "../constants";

export const WrapperContent = styled.div`
  width: ${sizes.size1160}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: ${spacings.space20}px;
  padding-right: ${spacings.space20}px;

  ${mq.b768} {
    padding-left: ${spacings.space30}px;
    padding-right: ${spacings.space30}px;
  }
`;

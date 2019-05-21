import styled from "@emotion/styled"

import { sizes, mq, spacings } from "../constants";
import { paddingSides20 } from "../styles"

export const WrapperContent = styled.div`
  width: ${sizes.size1160}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  ${paddingSides20};
  max-width: 100%;
  box-sizing: border-box;

  ${mq.b768} {
    padding-left: ${spacings.space30}px;
    padding-right: ${spacings.space30}px;
  }
`;

export const WrapperContentNoMobilePadding = styled(WrapperContent)`
  width: ${sizes.size1160}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 0;
  padding-right: 0;
`;

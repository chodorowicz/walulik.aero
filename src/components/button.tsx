import React from "react"
import styled from "@emotion/styled"

import { colors } from "../constants";

export const Button = styled.button`
  border-radius: 30px;
  border: solid 3px ${colors.accent};
  background: transparent;
  padding: 12px 22px;
  font-size: 17px;
  color: ${colors.accent};
  font-weight: 700;
`;

export const ButtonInner = styled.span`
  margin-right: 10px;
`;

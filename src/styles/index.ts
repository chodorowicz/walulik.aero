import { css } from '@emotion/core'

import { spacings } from "../constants"

export const gradient = css`
  background-image: linear-gradient(359deg, #d1d1d1, #f4f4f4);
`;

export const transition = css`
  transition: all ease 0.2s;
`;

export const grid12 = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${spacings.gridGap16}px;
`

export const paddingSides20 = css`
  padding-left: ${spacings.space20}px;
  padding-right: ${spacings.space20}px;
`

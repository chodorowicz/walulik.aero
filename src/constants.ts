export const fontSizes = {
  size15: 15,
  small: 17,
  size18: 18,
  medium: 20,
  large: 24,
  largePlus: 26,
  size28: 28,
  size36: 36,
  mediumLarge: 40,
  xLarge: 52,
  xxLarge: 72,
}

export const colors = {
  accent: "#EF1749",
  darkBlue: "#181C52",
  white: "#ffffff",
  whiteOff: "#F4F4F4",
  grey: "#D1D1D1",
  grey2: "#868686",
}

export const fontWeight = {
  light: 300,
  bold: 700,
  normal400: 400,
}

export const fontFamily = {
  roboto: `"Roboto", sans-serif`,
  montserrat: `"Montserrat", sans-serif`,
}

export const urls = {
  home: "/",
  about: "/aviation-research-consulting",
  books: "/aviation-law-books",
  researchPapers: "/aviation-research-papers",
  researchPapersList: "/aviation-research-papers#list",
  contact: "/#contact",
  privacyPolicy: "/privacy-policy",
}

export const sizes = {
  size1160: 1160,
}

export const spacings = {
  space20: 20,
  space30: 30,
  space40: 40,
  space50: 50,
  space60: 60,
  space80: 80,
  space100: 100,
  space120: 120,
  space150: 150,
  space1of12: Number((1 / 12) * 100).toFixed(2),
  gridGap16: 16,
}

export const breaksMap = {
  b576: 576,
  b768: 768,
  b1024: 1024,
}

export const breaks = [576, 768, 1024]

type IBreakPoints = "b576" | "b768" | "b1024";
export const mq = breaks.reduce(
  (acc, bp) => ({ ...acc, [`b${bp}`]: `@media (min-width: ${bp}px)` }),
  {}
) as { [x in IBreakPoints]: string }

export const breakPoints = {
  b768: 768,
  b1024: 1024,
}

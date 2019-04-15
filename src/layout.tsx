import * as React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

import { colors, fontFamily } from "./constants"
import { Footer } from "./layout/footer";

export const Layout: React.FC = ({ children }) => (
  <div>
    <Global
      styles={css`
        body {
          font-family: ${fontFamily.roboto};
          margin: 0;
          background-color: ${colors.whiteOff};
          color: ${colors.darkBlue};
        }
      `}
    />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;subset=latin-ext"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i&amp;subset=latin-ext"
        rel="stylesheet"
    />
    </Helmet>
    {children}
    <Footer />
  </div>
)

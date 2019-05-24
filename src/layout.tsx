import * as React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

import { colors, fontFamily } from "./constants"
import { Footer } from "./layout/footer";
import { LogoAndMenu } from "./components";

export const Layout: React.FC = ({ children }) => (
  <div>
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: ${fontFamily.roboto};
          margin: 0;
          background-color: ${colors.whiteOff};
          color: ${colors.darkBlue};
        }
        a {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
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
      <meta name="viewport" content="width=device-width, minimum-scale=1, minimal-ui"></meta>
    </Helmet>
    <LogoAndMenu />
    {children}
    <Footer />
  </div>
)

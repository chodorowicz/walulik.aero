import * as React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

export const Layout: React.FC = ({ children }) => (
  <div>
    <Global
      styles={css`
        body {
          font-family: "Montserrat", sans-serif;
          margin: 0;
        }
      `}
    />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;subset=latin-ext"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </div>
)

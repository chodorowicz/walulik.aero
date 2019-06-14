import * as React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

import { colors, fontFamily } from "./constants"
import { Footer } from "./layout/footer"
import { LogoAndMenu } from "./components"

interface IProps {
  title?: string
  description?: string
}

export const Layout: React.FC<IProps> = ({ children, title, description }) => {
  return (
    <div>
      <Global
        styles={css`
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
          button:focus,
          a:focus {
            outline: none;
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, minimal-ui"
        />
      </Helmet>
      <LogoAndMenu />
      {children}
      <Footer />
    </div>
  )
}

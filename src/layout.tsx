import * as React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import CookieConsent from "react-cookie-consent"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { colors, fontFamily, urls } from "./constants"
import { Footer } from "./layout/footer"
import { LogoAndMenu } from "./components"
import { Link } from "gatsby"

interface IProps {
  title?: string
  description?: string
}

function setVhCssVariable() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export const Layout: React.FC<IProps> = ({ children, title, description }) => {
  React.useEffect(() => {
    setVhCssVariable();
    window.addEventListener('resize', setVhCssVariable); 
  }, []);
  
  return (
    <div>
      <ToastContainer />
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
            color: ${colors.accent};
            &:hover {
              text-decoration: underline;
            }
          }
          button:focus,
          a:focus {
            outline: none;
          }

          .cookieConsent a {
            color: ${colors.accent};
          }

          .Toastify__toast.Toastify__toast--default {
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
      <CookieConsent
        buttonStyle={{
          color: colors.accent,
          fontSize: "16px",
          background: "none",
        }}
        buttonText="Agree"
      >
        Click here to indicate that you have read and agree to the{" "}
        <Link to={urls.privacyPolicy}>Privacy Policy</Link>.
      </CookieConsent>
      <Footer />
    </div>
  )
}

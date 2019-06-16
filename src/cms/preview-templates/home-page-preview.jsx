import * as React from "react"
import HomePage from "../../templates/home-page"

const HomePagePreview = ({ entry, widgetFor }) => {
  const data = {
    markdownRemark: {
      frontmatter: {
        claim: entry.getIn(['data', 'claim'])
      }
    }
  }
  return (
    <div>asd</div>
  )
}

export default HomePagePreview

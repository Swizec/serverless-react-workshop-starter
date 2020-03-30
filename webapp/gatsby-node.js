/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

// creating Gatsby pages for every entry in our dataset
exports.createPages = async ({ graphql, actions }) => {
  // fetch landing pages
  const result = await graphql(``)

  // iterate through result, create Gatsby pages
  result.data.mdlapi.allPages.forEach(
    ({ pageId, userId, pageName, content }) => {
      const landingPagePath = path.resolve("./src/pages/landingPage.js")

      // use actions.createPage to create each page at its URL
      // try to provide all necessary info for rendering via the pageContext
    }
  )

  return true
}

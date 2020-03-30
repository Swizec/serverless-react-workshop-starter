/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { navigate, StaticQuery, graphql } from "gatsby"
import { AuthProvider } from "react-use-auth"
import { ApolloProvider } from "react-apollo-hooks"

import { client } from "./src/apollo"

// Add your Auth0 config values
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthProvider
      navigate={navigate}
      auth0_domain="serverless-react-workshop.auth0.com"
      auth0_client_id="WwSXiJ1y4g3ynlby4EnAVEGz6Ul16OpQ"
    >
      {element}
    </AuthProvider>
  </ApolloProvider>
)

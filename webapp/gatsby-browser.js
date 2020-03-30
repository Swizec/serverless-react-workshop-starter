/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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
    <AuthProvider navigate={navigate} auth0_domain="" auth0_client_id="">
      {element}
    </AuthProvider>
  </ApolloProvider>
)

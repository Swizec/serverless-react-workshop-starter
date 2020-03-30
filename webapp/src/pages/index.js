import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { useAuth } from "react-use-auth"
import { Heading } from "rebass"

import { LoginButton } from "../components/LoginButton"
import { Dashboard } from "../components/Dashboard"

const IndexPage = () => {
  const { isAuthenticated } = useAuth()

  // create a simple landing page
  // add the LoginButton and Dashboard
  // try to play around with Rebass's responsive features

  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
    </Layout>
  )
}

export default IndexPage

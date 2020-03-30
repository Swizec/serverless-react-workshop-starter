import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { useAuth } from "react-use-auth"
import { Heading, Flex, Box, Button, Text } from "rebass"
import { Textarea } from "@rebass/forms"
import { useQuery, useMutation } from "react-apollo-hooks"
import gql from "graphql-tag"
import { useStaticQuery } from "gatsby"

import useRemark from "../useRemark"

function useContentFromServer({ userId, pageId, pageContent, setPageContent }) {
  // write a query to fetch page from the server

  // use a mutation to create a savePage function

  useEffect(() => {
    if (data) {
      setPageContent(data.page.content)
    }
  }, [data])

  return savePage
}

// this is the created page
// it doubles as the editor
const LandingPage = ({ pageContext }) => {
  const { pageName, pageId, userId } = pageContext
  const { isAuthenticated, user } = useAuth()

  // initiate state with compile-time data
  const [pageContent, setPageContent] = useState()
  // fetch fresh state from server on component mount
  const savePage = useContentFromServer({
    userId,
    pageId,
    pageContent,
    setPageContent,
  })

  const renderedPage = useRemark(pageContent)
  const shouldBeEditable = isAuthenticated() && user.sub === userId

  return (
    <Layout>
      <SEO title={pageName} />

      {shouldBeEditable ? (
        <>
          <Heading fontSize={[5, 6, 7]}>{pageName}</Heading>

          <Flex>
            <Box width={1 / 2}>
              <Textarea
                value={pageContent}
                onChange={ev => setPageContent(ev.target.value)}
                height="80%"
              />
              <Button variant="primary" onClick={savePage}>
                Save
              </Button>

              <Text fontSize={2}>
                Just share this URL with anyone, they only see the final page
              </Text>
            </Box>
            <Box width={1 / 2}>{renderedPage}</Box>
          </Flex>
        </>
      ) : (
        <Flex>
          <Box width={1}>{renderedPage}</Box>
        </Flex>
      )}
    </Layout>
  )
}

export default LandingPage

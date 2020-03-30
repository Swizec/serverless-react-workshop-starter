import { ApolloServer, gql } from "apollo-server-lambda";

import { createPage } from "./mutations";
import { allPages } from "./queries";

// this is where we define the shape of our API
const schema = gql`
    type LandingPage {
        userId: String
        pageId: String
        createdAt: String
        lastUpdatedAt: String
        pageName: String
        content: String
    }

    type Query {
        allPages: [LandingPage]
    }

    type Mutation {
        createPage(userId: String, pageName: String): LandingPage
    }
`;

// this is where the shape maps to functions
const resolvers = {
    Query: {
        allPages
    },
    Mutation: {
        createPage
    }
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

export const handler = server.createHandler({
    cors: {
        origin: "*", // for security in production, lock this to your real endpoints
        credentials: true
    }
});

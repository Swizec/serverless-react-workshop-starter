import { ApolloServer, gql } from "apollo-server-lambda";

import { createPage, savePage } from "./mutations";
import { allPages, page } from "./queries";

// this is where we define the shape of our API
const schema = gql``;

// this is where the shape maps to functions
const resolvers = {
    Query: {},
    Mutation: {}
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

export const handler = server.createHandler({
    cors: {
        origin: "*", // for security in production, lock this to your real endpoints
        credentials: true
    }
});

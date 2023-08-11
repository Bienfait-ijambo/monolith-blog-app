import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServerErrorCode } from '@apollo/server/errors';
// import { json } from 'body-parser';
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of ben",
        author: "Paul Auster",
    },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
    },
};
const app = express();
app.use(express.json());
app.get("/api/v1/ready", async (req, res) => {
    res.send({ message: "Hello, you're up!" });
});
app.use(express.static("public"));
// Disable ETag header
app.set("etag", false);
// Disable X-Powered-By header
app.disable("x-powered-by");
// app.set('trust proxy')
export const graphqlServer = async () => {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        formatError: (formattedError, error) => {
            // Return a different error message
            if (formattedError.extensions.code ===
                ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED) {
                return {
                    ...formattedError,
                    message: "Your query doesn't match the schema. Try double-checking it!",
                };
            }
            // Otherwise return the formatted error. This error can also
            // be manipulated in other ways, as long as it's returned.
            return formattedError;
        },
    });
    await server.start();
    app.use("/graphql", cors({ origin: [] }), 
    // json(),
    expressMiddleware(server));
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};

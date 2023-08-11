import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { initDbConnection } from "../typeorm";
import { typeDefs } from "../../schema";
import { resolvers } from "../../resolvers";
import { handleGraphqlError } from "./exceptions/handleGraphqlError";



interface MyContext {
  // You can optionally create a TS interface to set up types
  // for your contextValue
  authScope?: String;
}

const app = express();
app.use(express.json());

app.get("/api/v1/ready", async (req: Request, res: Response) => {
  res.send({ message: "Hello, you're up!" });
});

app.use(express.static("public"));

// Disable ETag header
app.set("etag", false);

// Disable X-Powered-By header
app.disable("x-powered-by");

// app.set('trust proxy')

export const bootApp = async () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    schema,
    formatError:handleGraphqlError
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({ origin: [] }),
    // json(),
    expressMiddleware(server)
  );


 await initDbConnection()
  

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
};


bootApp()
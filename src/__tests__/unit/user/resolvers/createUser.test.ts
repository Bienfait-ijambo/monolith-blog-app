// import { test } from "node:test";
// import assert from "node:assert";
// import { ApolloServer } from "@apollo/server";
// import { logErrorToFile } from "../../../../infrastructure/graphql-server/winston/logErrorToFile";
// import { typeDefs } from "../../../../schema";

// // const typeDefs = `#graphql
// // type Query {
// //   createUser(input: CreateUserInput!): CreateUserResponse!
// // }


// // input CreateUserInput{
// //     email:String! 
// //     password:String! 
// // }


// // type CreateUserResponse{
// //     id:ID!
// //     email:String! 
// //     role:String! 
// // }

// // `;

// const createUserInput = {
//   email: "test@example.com",
//   password: "secret",
// };

// const resolvers = {
//   Query: {
//     createUser: async (root, { input }) => {
//       return createUserInput;
//     },
//   },
// };

// test("Test users resolvers", async (t) => {
//   await t.test("check createUser resolver", async () => {
//     const testServer = new ApolloServer({
//       typeDefs,
//       resolvers,
//     });

//     const response: any = await testServer.executeOperation({
//       query: `query createUser($input: CreateUserInput!){
//             createUser(input: $input) {
//               email
//             }
//           }`,
//       variables: { input: createUserInput },
//     });

//     logErrorToFile(response, "graph-error");

//     assert.equal(
//       response.body.singleResult.data?.createUser?.email,
//       "test@example.com"
//     );
//   });
// });

// import { allow, rule, shield } from "graphql-shield";
// import { JwtToken } from "../../../middleware/Jwt";

// const isAuthenticated = rule({ cache: "contextual" })(
//   async (parent, args, { token }, info) => {
//    await JwtToken.verifyGraphqlToken(token);
//     return token !== null;
//   }
// );




// export default shield({
//   Query: {
//     "*": isAuthenticated,
//   },
//   Mutation: {
//     "*": isAuthenticated,
//     registerMainUser:allow,
//     verifyOptNumber:allow,
//     loginUser:allow,
//     loginUserViaOAuth:allow
//   },

// },{allowExternalErrors:true});
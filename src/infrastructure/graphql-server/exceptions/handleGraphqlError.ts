import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from "graphql";



  export const handleGraphqlError=(formattedError, error:GraphQLError) => {
    // Return a different error message
    if (
      formattedError.extensions.code ===
      ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
    ) {
      return {
        ...formattedError,
       message: "Your query doesn't match the schema. Try double-checking it!",
      };
    }

    // Otherwise return the formatted error. This error can also
    // be manipulated in other ways, as long as it's returned.
    return formattedError;
  }
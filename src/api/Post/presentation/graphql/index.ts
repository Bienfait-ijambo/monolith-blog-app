// import { authMutations } from "./auth.mutation"
import { postMutations } from "./post.mutation"
import { postQueries } from "./post.query"

export const postResolvers={
 
    Mutation:postMutations,
    Query:postQueries
}



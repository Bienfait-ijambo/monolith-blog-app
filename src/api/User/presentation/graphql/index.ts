// import { authMutations } from "./auth.mutation"
import { userMutations } from "./user.mutation"
import { userQueries } from "./user.query"

export const userResolvers={
 
    Mutation:userMutations,
    Query:userQueries
}



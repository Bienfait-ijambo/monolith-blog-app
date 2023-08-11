import { mergeResolvers } from "@graphql-tools/merge";
import { userResolvers } from "../api/User/presentation/graphql";
import { postResolvers } from "../api/Post/presentation/graphql";


const allResolvers = [
    userResolvers,
    postResolvers
];

export const resolvers = mergeResolvers(allResolvers);
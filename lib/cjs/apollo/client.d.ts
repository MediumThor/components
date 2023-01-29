export const client: ApolloClient<import("apollo-cache-inmemory").NormalizedCacheObject>;
export const blockClient: ApolloClient<import("apollo-cache-inmemory").NormalizedCacheObject>;
export const avalancheMininchefV2Client: GraphQLClient;
export const mininchefV2Clients: {
    43114: GraphQLClient;
    43113: undefined;
    11111: undefined;
    16: undefined;
    19: undefined;
    329847900: undefined;
    329847901: undefined;
};
import { ApolloClient } from "apollo-client";
import { GraphQLClient } from "graphql-request";

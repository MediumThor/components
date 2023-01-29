export const client: ApolloClient<import("apollo-cache-inmemory").NormalizedCacheObject>;
export const blockClient: ApolloClient<import("apollo-cache-inmemory").NormalizedCacheObject>;
export const avalancheMininchefV2Client: GraphQLClient;
export const mininchefV2Clients: {
    [x: number]: GraphQLClient | undefined;
};
import { ApolloClient } from "apollo-client";
import { GraphQLClient } from "graphql-request";

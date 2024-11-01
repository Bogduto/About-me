import { GraphQLClient } from 'graphql-request';

const SUPABASE_GRAPHQL_URL = 'YOUR_SUPABASE_URL/graphql/v1'; // Replace with your Supabase GraphQL URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase Anon Key

export const gqlClient = new GraphQLClient(SUPABASE_GRAPHQL_URL, {
  headers: {
    apiKey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  },
});

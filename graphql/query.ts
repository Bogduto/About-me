import { gqlClient } from './graphqlClient';
import { gql } from 'graphql-request';

const GET_TASKS_QUERY = gql`
  query GetTasks {
    tasks {
      id
      task_name
    }
  }
`;

export async function fetchTasks() {
  try {
    const data = await gqlClient.request(GET_TASKS_QUERY);
    console.log('Tasks:', data);
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

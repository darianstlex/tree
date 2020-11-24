import { createEffect } from 'effector';
import { gql } from '@apollo/client';
import { client } from '../client';

import { Response } from './types';

const GIT_SEARCH = gql`
  query GitSearch($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`

export const gitSearch = createEffect({
  handler: (text: string): Promise<Response> => client.query({
    query: GIT_SEARCH,
    variables: {
      query: text,
      first: 100,
    }
  })
});

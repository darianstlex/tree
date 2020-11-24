import { createStore } from 'effector';
import * as effects from './effects';
import * as events from './events';

import { ApolloQueryResult } from '@apollo/client';
import { Response, ResponseRepo, Repo } from './types';

/**
 * Create repository list store and reducers
 */
export const $list = createStore([], { name: 'list' })
  .on(effects.gitSearch.doneData, (state, response: ApolloQueryResult<any> | Response) => response.data.search.edges.map((item: ResponseRepo): Repo => {
    const { node: { name, id: key, url, stargazers, forks } } = item;
    return { name, key, url, stargazers: stargazers.totalCount, forks: forks.totalCount }
  }))
  .reset(events.reset);

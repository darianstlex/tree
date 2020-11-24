import { gitSearch } from './effects';
import { reset } from './events';
import { $list as $ } from './store';
import * as types from './types';

export const githubService = {
  $,
  gitSearch,
  reset,
  types,
}

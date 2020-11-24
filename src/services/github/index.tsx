import { gitSearch } from './effects';
import { reset } from './events';
import { $list as $ } from './store';

export const githubService = {
  $,
  gitSearch,
  reset,
}

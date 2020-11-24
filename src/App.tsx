import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { useStore } from 'effector-react';
import { SearchBar } from './components/SearchBar';
import { GitTable } from './components/GitTable';
import { githubService } from './services/github';

import { Repo } from './services/github/types';

import styles from './App.module.scss';

const App = () => {
  const $list: Repo[] = useStore(githubService.$);
  const $loading = useStore(githubService.gitSearch.pending)
  const onSearch = (text: string) => {
    try {
      return githubService.gitSearch(text);
    } catch (e) {}
  }

  return (
    <Layout className={styles.content}>
      <Layout.Header className={styles.header}>
        <SearchBar onSearch={onSearch} />
      </Layout.Header>
      <Layout.Content>
         <GitTable data={$list} loading={$loading}/>
      </Layout.Content>
    </Layout>
  );
}

export default App;

import React from 'react';
import { Input } from 'antd';

import styles from './index.module.scss';

type SearchBarProps = {
  onSearch: (text: string) => void,
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <Input.Search
      className={styles.search}
      placeholder='git search string'
      allowClear
      enterButton='Search'
      size='large'
      onSearch={onSearch}
    />
  )
}

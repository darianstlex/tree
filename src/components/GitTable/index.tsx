import React from 'react';
import { Table } from 'antd';
import { Repo } from '../../services/github/types';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: String, record: any) => (<a href={record.url}>{text}</a>),
  },
  {
    title: 'Stars',
    dataIndex: 'stargazers',
    key: 'stargazers',
  },
  {
    title: 'Forks',
    dataIndex: 'forks',
    key: 'forks',
  },
];

type GitTableProps = {
  data: Repo[]
  loading?: boolean
}

export const GitTable = ({ data, loading = false }: GitTableProps) => <Table columns={columns} dataSource={data} loading={loading} />

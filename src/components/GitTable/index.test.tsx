import React from 'react';
import renderer from 'react-test-renderer';
import { GitTable } from './index';
import { Repo } from '../../services/github/types';

const data: Repo[] = [{
  name: 'Name',
  key: 'name',
  url: 'some url',
  stargazers: 300,
  forks: 10,
}];

describe('GitTable', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<GitTable data={data}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

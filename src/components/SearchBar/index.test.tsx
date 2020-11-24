import React from 'react';
import renderer from 'react-test-renderer';
import { SearchBar } from './index';

const onSearch = jest.fn();

describe('SearchBar', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<SearchBar onSearch={onSearch}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

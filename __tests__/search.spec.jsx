import React from 'react';
import { shallow } from 'enzyme';
import Search from '../js/Search';
import Showcard from '../js/ShowCard';
import preload from '../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows ', () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(Showcard).length);
});

test('Search renders correct amount of shows based on search term', () => {
  const searchWord = 'black';
  component.find('input').simulate('change', { target: { value: searchWord } });
});

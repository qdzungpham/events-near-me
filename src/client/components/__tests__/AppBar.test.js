import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '../AppBar';

describe('AppBar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AppBar title="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});

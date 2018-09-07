import React from 'react';
import { shallow } from 'enzyme';
import BrowseEventCard from '../BrowseEventCard';

describe('BrowseEventCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <BrowseEventCard
        event={{
          id: '2',
          title: 'title',
          dateTime: '2018-09-07T14:12:15.112Z',
          location: 'Brisbane',
          coords: [-24, 153],
          distance: 21,
          image: 'http://via.placeholder.com/100x100'
        }}
        overMarker="-1"
        onHoverEventCard={jest.fn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

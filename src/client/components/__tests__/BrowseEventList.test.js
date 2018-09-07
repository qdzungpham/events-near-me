import React from 'react';
import { shallow } from 'enzyme';
import BrowseEventList from '../BrowseEventList';

describe('BrowseEventList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <BrowseEventList
        title="test"
        events={[
          {
            id: '2',
            title: 'title',
            dateTime: '2018-09-07T14:12:15.112Z',
            location: 'Brisbane',
            coords: [-24, 153],
            distance: 21,
            image: 'http://via.placeholder.com/100x100'
          }
        ]}
        overMarker="-1"
        onHoverEventCard={jest.fn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

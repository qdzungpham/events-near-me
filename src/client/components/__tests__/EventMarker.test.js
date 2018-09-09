import React from 'react';
import { shallow } from 'enzyme';
import EventMarker from '../EventMarker';

describe('EventMarker', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <EventMarker
        event={{
          id: '2',
          title: 'title',
          dateTime: '2018-09-07T14:12:15.112Z',
          location: 'Brisbane',
          coords: [-24, 153],
          distance: 21,
          image: 'http://via.placeholder.com/100x100'
        }}
        onHoverMarker={jest.fn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle isOpen when click marker', () => {
    const wrapper = shallow(
      <EventMarker
        event={{
          id: '2',
          title: 'title',
          dateTime: '2018-09-07T14:12:15.112Z',
          location: 'Brisbane',
          coords: [-24, 153],
          distance: 21,
          image: 'http://via.placeholder.com/100x100'
        }}
        onHoverMarker={jest.fn}
      />
    );

    wrapper.find('[id="marker"]').simulate('click');
    expect(wrapper.state()).toEqual({ isOpen: true });
  });
});

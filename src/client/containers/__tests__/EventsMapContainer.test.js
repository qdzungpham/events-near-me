import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '../EventsMapContainer';

describe('EventMapContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AppBar
        events={[]}
        userLocation={{ lat: 12, lon: 12 }}
        onHoverMarker={jest.fn}
        overEventCard={jest.fn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

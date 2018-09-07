import {
  REQUEST_EVENTS_PENDING,
  REQUEST_EVENTS_SUCCESS,
  REQUEST_EVENTS_FAILED,
  REQUEST_EVENT_DETAIL_FAILED,
  REQUEST_EVENT_DETAIL_SUCCESS,
  REQUEST_EVENT_DETAIL_PENDING,
  REQUEST_USER_LOCATION_PENDING,
  REQUEST_USER_LOCATION_SUCCESS,
  REQUEST_USER_LOCATION_FAILED,
  HOVER_MARKER,
  HOVER_EVENT_CARD
} from '../constants';

import {
  requestEventsReducer,
  requestEventDetailReducer,
  requestUserLocationReducer,
  hoverMarkerReducer,
  hoverEventCardReducer
} from '../reducers';

describe('requestEventsReducer', () => {
  const initialStateEvents = {
    events: [],
    isPending: true
  };

  it('should return initial state', () => {
    expect(requestEventsReducer(undefined, {})).toEqual({
      events: [],
      isPending: true
    });
  });

  it('should handle REQUEST_EVENTS_PENDING', () => {
    expect(requestEventsReducer(initialStateEvents, { type: REQUEST_EVENTS_PENDING })).toEqual({
      events: [],
      isPending: true
    });
  });

  it('should handle REQUEST_EVENTS_SUCCESS', () => {
    expect(
      requestEventsReducer(initialStateEvents, { type: REQUEST_EVENTS_SUCCESS, payload: [1, 2, 3] })
    ).toEqual({
      events: [1, 2, 3],
      isPending: false
    });
  });

  it('should handle REQUEST_EVENTS_FAILED', () => {
    expect(
      requestEventsReducer(initialStateEvents, {
        type: REQUEST_EVENTS_FAILED,
        payload: Error('error')
      })
    ).toEqual({
      events: [],
      isPending: true,
      error: Error('error')
    });
  });
});

describe('requestEventDetailReducer', () => {
  const initialStateEventDetail = {
    eventDetail: {},
    isPending: true
  };

  it('should return initial state', () => {
    expect(requestEventDetailReducer(undefined, {})).toEqual({
      eventDetail: {},
      isPending: true
    });
  });

  it('should handle REQUEST_EVENT_DETAIL_PENDING', () => {
    expect(
      requestEventDetailReducer(initialStateEventDetail, { type: REQUEST_EVENT_DETAIL_PENDING })
    ).toEqual({
      eventDetail: {},
      isPending: true
    });
  });

  it('should handle REQUEST_EVENT_DETAIL_SUCCESS', () => {
    expect(
      requestEventDetailReducer(initialStateEventDetail, {
        type: REQUEST_EVENT_DETAIL_SUCCESS,
        payload: { title: 'test' }
      })
    ).toEqual({
      eventDetail: { title: 'test' },
      isPending: false
    });
  });

  it('should handle REQUEST_EVENT_DETAIL_FAILED', () => {
    expect(
      requestEventDetailReducer(initialStateEventDetail, {
        type: REQUEST_EVENT_DETAIL_FAILED,
        payload: Error('error')
      })
    ).toEqual({
      eventDetail: {},
      isPending: true,
      error: Error('error')
    });
  });
});

describe('requestUserLocationReducer', () => {
  const initialStateUserLocation = {
    userLocation: {},
    isPending: true
  };

  it('should return initial state', () => {
    expect(requestUserLocationReducer(undefined, {})).toEqual({
      userLocation: {},
      isPending: true
    });
  });

  it('should handle REQUEST_USER_LOCATION_PENDING', () => {
    expect(
      requestUserLocationReducer(initialStateUserLocation, { type: REQUEST_USER_LOCATION_PENDING })
    ).toEqual({
      userLocation: {},
      isPending: true
    });
  });

  it('should handle REQUEST_USER_LOCATION_SUCCESS', () => {
    expect(
      requestUserLocationReducer(initialStateUserLocation, {
        type: REQUEST_USER_LOCATION_SUCCESS,
        payload: { lat: 12, lng: 12 }
      })
    ).toEqual({
      userLocation: { lat: 12, lng: 12 },
      isPending: false
    });
  });

  it('should handle REQUEST_USER_LOCATION_FAILED', () => {
    expect(
      requestUserLocationReducer(initialStateUserLocation, {
        type: REQUEST_USER_LOCATION_FAILED,
        payload: Error('error')
      })
    ).toEqual({
      userLocation: {},
      isPending: true,
      error: Error('error')
    });
  });
});

describe('hoverMarkerReducer', () => {
  const initialStateHoverMarker = {
    id: '-1'
  };

  it('should return initial state', () => {
    expect(hoverMarkerReducer(undefined, {})).toEqual({
      id: '-1'
    });
  });

  it('should handle HOVER_MARKER', () => {
    expect(
      hoverMarkerReducer(initialStateHoverMarker, { type: HOVER_MARKER, payload: '1' })
    ).toEqual({
      id: '1'
    });
  });
});

describe('hoverEventCardReducer', () => {
  const initialStateHoverEventCard = {
    id: '-1'
  };

  it('should return initial state', () => {
    expect(hoverEventCardReducer(undefined, {})).toEqual({
      id: '-1'
    });
  });

  it('should handle HOVER_EVENT_CARD', () => {
    expect(
      hoverEventCardReducer(initialStateHoverEventCard, { type: HOVER_EVENT_CARD, payload: '1' })
    ).toEqual({
      id: '1'
    });
  });
});

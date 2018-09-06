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
  MOUSE_OUT_MARKER,
  MOUSE_OVER_MARKER
} from './constants';

const initialStateEvents = {
  events: [],
  isPending: true
};

export const requestEventsReducer = (state = initialStateEvents, action = {}) => {
  switch (action.type) {
    case REQUEST_EVENTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_EVENTS_SUCCESS:
      return Object.assign({}, state, { events: action.payload, isPending: false });
    case REQUEST_EVENTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateEventDetail = {
  eventDetail: {},
  isPending: true
};

export const requestEventDetailReducer = (state = initialStateEventDetail, action = {}) => {
  switch (action.type) {
    case REQUEST_EVENT_DETAIL_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_EVENT_DETAIL_SUCCESS:
      return Object.assign({}, state, { eventDetail: action.payload, isPending: false });
    case REQUEST_EVENT_DETAIL_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateUserLocation = {
  userLocation: {},
  isPending: true
};

export const requestUserLocationReducer = (state = initialStateUserLocation, action = {}) => {
  switch (action.type) {
    case REQUEST_USER_LOCATION_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USER_LOCATION_SUCCESS:
      return Object.assign({}, state, { userLocation: action.payload, isPending: false });
    case REQUEST_USER_LOCATION_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateMouseOverMarker = {
  id: '-1'
};

export const mouseOverMarkerReducer = (state = initialStateMouseOverMarker, action = {}) => {
  switch (action.type) {
    case MOUSE_OVER_MARKER:
      return Object.assign({}, state, { id: action.payload });
    case MOUSE_OUT_MARKER:
      return Object.assign({}, state, { id: '-1' });
    default:
      return state;
  }
};

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

const initialStateHoverMarker = {
  id: '-1'
};

export const hoverMarkerReducer = (state = initialStateHoverMarker, action = {}) => {
  switch (action.type) {
    case HOVER_MARKER:
      return Object.assign({}, state, { id: action.payload });
    default:
      return state;
  }
};

const initialStateHoverEventCard = {
  id: '-1'
};

export const hoverEventCardReducer = (state = initialStateHoverEventCard, action = {}) => {
  switch (action.type) {
    case HOVER_EVENT_CARD:
      return Object.assign({}, state, { id: action.payload });
    default:
      return state;
  }
};

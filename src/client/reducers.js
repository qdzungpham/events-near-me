import {
  REQUEST_EVENTS_PENDING,
  REQUEST_EVENTS_SUCCESS,
  REQUEST_EVENTS_FAILED,
  REQUEST_EVENT_DETAIL_FAILED,
  REQUEST_EVENT_DETAIL_SUCCESS,
  REQUEST_EVENT_DETAIL_PENDING
} from './constants';

const initialStateEvents = {
  events: [],
  isPending: true
};

export const requestEventsReducer = (state = initialStateEvents, action = {}) => {
  switch (action.type) {
    case REQUEST_EVENTS_PENDING:
      return Object.assign({}, state, { isPeding: true });
    case REQUEST_EVENTS_SUCCESS:
      return Object.assign({}, state, { events: action.payload, isPeding: false });
    case REQUEST_EVENTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPeding: false });
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
      return Object.assign({}, state, { isPeding: true });
    case REQUEST_EVENT_DETAIL_SUCCESS:
      return Object.assign({}, state, { eventDetail: action.payload, isPeding: false });
    case REQUEST_EVENT_DETAIL_FAILED:
      return Object.assign({}, state, { error: action.payload, isPeding: false });
    default:
      return state;
  }
};

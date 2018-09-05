import { REQUEST_EVENTS_PENDING, REQUEST_EVENTS_SUCCESS, REQUEST_EVENTS_FAILED } from './constants';

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

export const e = () => {};

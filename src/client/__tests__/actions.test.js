import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../actions';
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

const mockStore = configureMockStore([thunkMiddleware]);

describe('requestEvents', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should handle requesting events', () => {
    const store = mockStore();
    store.dispatch(actions.requestEvents([15, 16], 100, 5));
    const action = store.getActions();
    expect(action[0]).toEqual({ type: REQUEST_EVENTS_PENDING });
  });

  it('should handle', async (done) => {
    moxios.stubRequest('/api/fetchNearEvents', {
      status: 201,
      response: {}
    });
    expect.assertions(1);
    const store = mockStore();
    await store.dispatch(actions.requestEvents([15, 16], 100, 5));
    expect(store.getActions()).toEqual({});
    done();
  });
});

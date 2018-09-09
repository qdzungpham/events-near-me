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

  it('should dispatch REQUEST_EVENTS_PENDING', () => {
    const store = mockStore();
    store.dispatch(actions.requestEvents([15, 16], 100, 5));
    const action = store.getActions();
    expect(action[0]).toEqual({ type: REQUEST_EVENTS_PENDING });
  });

  it('should dispatch REQUEST_EVENTS_SUCCESS', (done) => {
    expect.assertions(1);

    moxios.stubRequest('/api/fetchNearEvents', {
      status: 200,
      response: { events: [{}, {}] }
    });

    const store = mockStore();
    store.dispatch(actions.requestEvents([15, 16], 100, 5));

    moxios.wait(() => {
      expect(store.getActions()[1]).toEqual({ type: REQUEST_EVENTS_SUCCESS, payload: [{}, {}] });
      done();
    });
  });

  it('should dispatch REQUEST_EVENTS_FAILED', (done) => {
    expect.assertions(1);

    moxios.stubRequest('/api/fetchNearEvents', {
      status: 404,
      response: { events: [{}, {}] }
    });

    const store = mockStore();
    store.dispatch(actions.requestEvents([15, 16], 100, 5));

    moxios.wait(() => {
      expect(store.getActions()[1]).toEqual({
        type: REQUEST_EVENTS_FAILED,
        payload: Error('Request failed with status code 404')
      });
      done();
    });
  });
});

describe('requestUserLoation', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch REQUEST_USER_LOCATION_PENDING', () => {
    const store = mockStore();
    store.dispatch(actions.requestUserLocation());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: REQUEST_USER_LOCATION_PENDING });
  });

  it('should dispatch REQUEST_USER_LOCATION_SUCCESS', (done) => {
    expect.assertions(1);

    moxios.stubRequest('http://ip-api.com/json', {
      status: 200,
      response: { lat: 12, lon: 12 }
    });

    const store = mockStore();
    store.dispatch(actions.requestUserLocation());

    moxios.wait(() => {
      expect(store.getActions()[1]).toEqual({
        type: REQUEST_USER_LOCATION_SUCCESS,
        payload: { lat: 12, lon: 12 }
      });
      done();
    });
  });

  it('should dispatch REQUEST_USER_LOCATION_FAILED', (done) => {
    expect.assertions(1);

    moxios.stubRequest('http://ip-api.com/json', {
      status: 404,
      response: { events: [{}, {}] }
    });

    const store = mockStore();
    store.dispatch(actions.requestUserLocation());

    moxios.wait(() => {
      expect(store.getActions()[1]).toEqual({
        type: REQUEST_USER_LOCATION_FAILED,
        payload: Error('Request failed with status code 404')
      });
      done();
    });
  });
});

describe('requestEventDetail', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch REQUEST_EVENT_DETAIL_PENDING', () => {
    const store = mockStore();
    store.dispatch(actions.requestEventDetail(1));
    const action = store.getActions();
    expect(action[0]).toEqual({ type: REQUEST_EVENT_DETAIL_PENDING });
  });

  it('should dispatch REQUEST_EVENT_DETAIL_SUCCESS', (done) => {
    expect.assertions(1);

    moxios.stubRequest('/api/fetchEvent/1', {
      status: 200,
      response: { id: '1', title: 'Event Title A' }
    });

    const store = mockStore();
    store.dispatch(actions.requestEventDetail(1));

    moxios.wait(() => {
      expect(store.getActions()[1]).toEqual({
        type: REQUEST_EVENT_DETAIL_SUCCESS,
        payload: { id: '1', title: 'Event Title A' }
      });
      done();
    });
  });

  it('should dispatch REQUEST_EVENT_DETAIL_FAILED', (done) => {
    expect.assertions(1);

    moxios.stubRequest('/api/fetchEvent/1', {
      status: 404,
      response: { id: '1', title: 'Event Title A' }
    });

    const store = mockStore();
    store.dispatch(actions.requestEventDetail(1));

    moxios.wait(() => {
      expect(store.getActions()[1]).toEqual({
        type: REQUEST_EVENT_DETAIL_FAILED,
        payload: Error('Request failed with status code 404')
      });
      done();
    });
  });
});

describe('hoverMarker', () => {
  it('should dispatch HOVER_MARKER', () => {
    const store = mockStore();
    store.dispatch(actions.hoverMarker());
    expect(store.getActions()[0]).toEqual({ type: HOVER_MARKER });
  });
});

describe('hoverMarker', () => {
  it('should dispatch HOVER_EVENT_CARD', () => {
    const store = mockStore();
    store.dispatch(actions.hoverEventCard());
    expect(store.getActions()[0]).toEqual({ type: HOVER_EVENT_CARD });
  });
});

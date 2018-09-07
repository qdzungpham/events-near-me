import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Routes from './containers';
import {
  requestEventsReducer,
  requestEventDetailReducer,
  requestUserLocationReducer,
  hoverMarkerReducer,
  hoverEventCardReducer
} from './reducers';

const logger = createLogger();

const rootReducers = combineReducers({
  requestEventsReducer,
  requestEventDetailReducer,
  requestUserLocationReducer,
  hoverMarkerReducer,
  hoverEventCardReducer
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

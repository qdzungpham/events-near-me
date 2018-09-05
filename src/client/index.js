import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import BrowseContainer from './containers/BrowseContainer';
import { requestEventsReducer } from './reducers';

const logger = createLogger();

const rootReducers = combineReducers({ requestEventsReducer });

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowseContainer />
  </Provider>,
  document.getElementById('root')
);

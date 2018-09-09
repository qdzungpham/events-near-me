import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import Routes from './containers';
import {
  requestEventsReducer,
  requestEventDetailReducer,
  requestUserLocationReducer,
  hoverMarkerReducer,
  hoverEventCardReducer
} from './reducers';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

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
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

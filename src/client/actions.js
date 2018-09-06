import axios from 'axios';
import {
  REQUEST_EVENTS_PENDING,
  REQUEST_EVENTS_SUCCESS,
  REQUEST_EVENTS_FAILED,
  REQUEST_EVENT_DETAIL_FAILED,
  REQUEST_EVENT_DETAIL_SUCCESS,
  REQUEST_EVENT_DETAIL_PENDING
} from './constants';

export const requestEvents = (userCoords, withinDistance, nEvents) => (dispatch) => {
  dispatch({ type: REQUEST_EVENTS_PENDING });
  const data = {
    userCoords,
    withinDistance,
    nEvents
  };
  axios
    .post('/api/fetchNearEvents', data)
    .then((response) => {
      if (response.data.error) {
        dispatch({ type: REQUEST_EVENTS_FAILED, payload: response.data.error });
      }
      dispatch({ type: REQUEST_EVENTS_SUCCESS, payload: response.data.events });
    })
    .catch(error => dispatch({ type: REQUEST_EVENTS_FAILED, payload: error }));
};

export const requestEventDetail = id => (dispatch) => {
  dispatch({ type: REQUEST_EVENT_DETAIL_PENDING });

  axios
    .get(`/api/fetchEvent/${id}`)
    .then(response => dispatch({ type: REQUEST_EVENT_DETAIL_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: REQUEST_EVENT_DETAIL_FAILED, payload: error }));
};

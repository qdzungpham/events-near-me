import axios from 'axios';
import {
  REQUEST_EVENTS_PENDING,
  REQUEST_EVENTS_SUCCESS,
  REQUEST_EVENTS_FAILED,
  REQUEST_EVENT_DETAIL_FAILED,
  REQUEST_EVENT_DETAIL_SUCCESS,
  REQUEST_EVENT_DETAIL_PENDING,
  REQUEST_USER_LOCATION_FAILED,
  REQUEST_USER_LOCATION_SUCCESS,
  REQUEST_USER_LOCATION_PENDING,
  HOVER_MARKER,
  HOVER_EVENT_CARD
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

export const requestUserLocation = () => (dispatch) => {
  dispatch({ type: REQUEST_USER_LOCATION_PENDING });

  axios
    .get('http://ip-api.com/json')
    .then(response => dispatch({ type: REQUEST_USER_LOCATION_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: REQUEST_USER_LOCATION_FAILED, payload: error }));
};

export const requestEventDetail = id => (dispatch) => {
  dispatch({ type: REQUEST_EVENT_DETAIL_PENDING });

  axios
    .get(`/api/fetchEvent/${id}`)
    .then(response => dispatch({ type: REQUEST_EVENT_DETAIL_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: REQUEST_EVENT_DETAIL_FAILED, payload: error }));
};

export const hoverMarker = id => ({
  type: HOVER_MARKER,
  payload: id
});

export const hoverEventCard = id => ({
  type: HOVER_EVENT_CARD,
  payload: id
});

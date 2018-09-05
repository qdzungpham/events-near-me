import axios from 'axios';
import { REQUEST_EVENTS_PENDING, REQUEST_EVENTS_SUCCESS, REQUEST_EVENTS_FAILED } from './constants';

export const requestEvents = (userCoords, withinDistance) => (dispatch) => {
  dispatch({ type: REQUEST_EVENTS_PENDING });
  const data = {
    userCoords,
    withinDistance
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

export const s = () => {};

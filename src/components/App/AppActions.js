import actions from "../../actions/actions";

import { API_URL } from "../../apiConfig";
import { API_KEY } from "../../../secrets";

const { REQUEST_WEATHER, RECEIVE_WEATHER, ERROR } = actions;

export const requestWeather = () => ({
  type: REQUEST_WEATHER
});

export const receiveWeather = payload => ({
  type: RECEIVE_WEATHER,
  payload
});

export function getWeather(units, zipcode) {
  return dispatch => {
    dispatch(requestWeather());

    return fetch(`${API_URL}${zipcode}&units=${units}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        json.cod === "404"
          ? dispatch({ type: ERROR, payload: json.message })
          : dispatch(receiveWeather(json));
      });
  };
}

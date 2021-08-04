import * as types from "./actionTypes";

/**
 * Load average values requested.
 * @returns {{type: string}}
 */
export function temperatureClick() {
  return { type: types.TEMPERATURE_FILTER };
}

/**
 * Average values successfully loaded action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function humidityClick() {
  return { type: types.HUMIDITY_FILTER };
}

/**
 * Average values loading failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function pollutionClick() {
  return { type: types.POLLUTION_FILTER };
}

/**
 * Fires a get request to fetch average values and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function changeTemperature() {
  return function (dispatch) {
    dispatch(temperatureClick());
  };
}
export function changeHumidity() {
  return function (dispatch) {
    dispatch(humidityClick());
  };
}
export function changePollution() {
  return function (dispatch) {
    dispatch(pollutionClick());
  };
}

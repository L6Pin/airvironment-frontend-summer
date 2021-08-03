import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

/**
 * Load average values requested.
 * @returns {{type: string}}
 */
export function loadMeasurementsRequest() {
  return { type: types.MEASUREMENTS_REQUEST };
}

/**
 * Average values successfully loaded action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function loadMeasurementsSuccess(response) {
  return { type: types.MEASUREMENTS_SUCCESS, response };
}

/**
 * Average values loading failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function loadMeasurementsFailure(error) {
  return { type: types.MEASUREMENTS_FAILURE, error };
}

/**
 * Fires a get request to fetch average values and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function loadMeasurements(params) {
  return function (dispatch) {
    dispatch(loadMeasurementsRequest());
    return measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadMeasurementsSuccess(response));
      })
      .catch((error) => {
        dispatch(loadMeasurementsFailure(JSON.parse(error.message)));
        console.log("Error loading average values.");
      });
  };
}

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function FiltersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case types.TEMPERATURE_FILTER:
      return {
        ...state,
        temperature: !state.temperature,
      };
    case types.HUMIDITY_FILTER:
      return {
        ...state,
        humidity: !state.humidity,
      };
    case types.POLLUTION_FILTER:
      return {
        ...state,
        pollution: !state.pollution,
      };
    default:
      return state;
  }
}

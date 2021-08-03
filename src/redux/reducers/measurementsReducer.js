import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import moment from "moment";
import { groupBy, EXTREME_TYPES, getExtreme } from "../../common/utils";

export default function MeasurementsReducer(
  state = initialState.measurements,
  action
) {
  switch (action.type) {
    case types.MEASUREMENTS_SUCCESS:
      return action.response;
    case types.MEASUREMENTS_FAILURE:
      return state;
    default:
      return state;
  }
}

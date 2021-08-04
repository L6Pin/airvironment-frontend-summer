import { combineReducers } from "redux";
import averageValues from "./averageValuesReducer";
import measurements from "./measurementsReducer";
import filters from "./filtersReducer";

const rootReducer = combineReducers({ averageValues, measurements, filters });

export default rootReducer;

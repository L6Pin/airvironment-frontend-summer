import React, { useState } from "react";
import "../assets/styles/components/Filter.scss";

import { SlideDown, PollutionOpacity } from "../assets/icons";
import TemperatureOpacity from "../assets/icons/TemperatureOpacity";
import TemperatureFull from "../assets/icons/TemperatureFull";
import HumidityOpacity from "../assets/icons/HumidityOpacity";
import PollutionFull from "../assets/icons/PollutionFull";
import HumidityFull from "../assets/icons/HumidityFull";
import CheckedIcon from "../assets/icons/CheckedIcon";
import { SliderHours } from "./index";
import {
  changeHumidity,
  changePollution,
  changeTemperature,
} from "../redux/actions/filtersAction";
import { connect } from "react-redux";
import moment from "moment";

const Filter = ({
  clickTemperature,
  filters,
  clickHumidity,
  clickPollution,
}) => {
  let date = moment().startOf("day");
  console.log(date);
  let todayDate = date.toISOString().substr(0, 10);

  const [params, setParams] = useState({
    all: true,
    date_from: moment().startOf("day"),
    date_to: null,
    temperature_from: null,
    temperature_to: null,
  });

  return (
    <div className="filter">
      <div className="filterData" id="range">
        <span className="filterName">Date</span>
        <div className="slideDown">
          <SlideDown className="iconSlideDown" />
          <input
            className="filterChoice unstyled"
            type="date"
            defaultValue={todayDate}
          />
        </div>
      </div>
      <div className="filterData">
        <span className="filterName">Range</span>
        <select className="filterChoice">
          <option value="1">1</option>
          <option value="7">7</option>
          <option value="30">30</option>
        </select>
      </div>

      <div className="filterData">
        <span className="filterName">Temperature range </span>
        <SliderHours />{" "}
      </div>

      <div className="filterData" id="filters">
        <span className="filterName">data type</span>
        <div className="filtersContainer">
          <div onClick={() => clickTemperature()}>
            {filters.temperature ? <TemperatureFull /> : <TemperatureOpacity />}
          </div>
          <div onClick={() => clickHumidity()}>
            {filters.humidity ? <HumidityFull /> : <HumidityOpacity />}
          </div>
          <div onClick={() => clickPollution()}>
            {filters.pollution ? <PollutionFull /> : <PollutionOpacity />}
          </div>
        </div>
      </div>
      <CheckedIcon className="checkedIcon" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}
const mapDispatchToProps = {
  clickTemperature: changeTemperature,
  clickHumidity: changeHumidity,
  clickPollution: changePollution,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

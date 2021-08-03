import React from "react";
import "../assets/styles/components/Filter.scss";
import {
  TemperatureIcon,
  HumidityIcon,
  PollutionIcon,
  SlideDown,
} from "../assets/icons";
import TemperatureOpasity from "../assets/icons/TemperatureOpasity";
import TemperatureFull from "../assets/icons/TemperatureFull";
import HumidityOpasity from "../assets/icons/HumidityOpasity";
import PollutionFull from "../assets/icons/PollutionFull";

const Filter = () => {
  let date = new Date();
  let todayDate = date.toISOString().substr(0, 10);

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
          ></input>
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

      <div className="filterData"></div>

      <div className="filterData" id="filters">
        <span className="filterName">data type</span>
        <div className="filtersContainer">
          <TemperatureFull />
          <HumidityOpasity />
          <PollutionFull />
        </div>
      </div>
    </div>
  );
};

export default Filter;

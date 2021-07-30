import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import moment from "moment";

import {
  SmallTemperature,
  SmallHumidity,
  SmallPollution,
  HighValueIcon,
  LowValueIcon,
  TemperatureIcon,
} from "../assets/icons";

function MeasurementCard({ averageValue }) {
  console.log(averageValue);
  return (
    <div className="measurement-card-container">
      <div className="title">
        <div className="day-name">
          {moment(averageValue.date, "DD/M/YYYY").format("ddd")}
        </div>
        <div className="date">
          {moment(averageValue.date, "DD/M/YYYY").format("DD. MMM YYYY.")}
        </div>
      </div>
      <hr></hr>
      <div className="measurements-info">
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallTemperature />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">
                  {averageValue.maxTemperature}°C
                </div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">
                  {averageValue.minTemperature}°C
                </div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              {averageValue.averageTemperature}°C
            </span>
          </div>
        </div>
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallHumidity />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">{averageValue.maxHumidity}%</div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">{averageValue.minHumidity}%</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              {averageValue.averageHumidity}%
            </span>
          </div>
        </div>
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallPollution />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">
                  {averageValue.maxPollution}ppb
                </div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">
                  {averageValue.minPollution}ppb
                </div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              {averageValue.averagePollution}
              <span className="ppb">ppb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;

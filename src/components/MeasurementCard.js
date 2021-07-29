import React from "react";
import "../assets/styles/components/MeasurementCard.scss";

import {
  SmallTemperature,
  SmallHumidity,
  SmallPollution,
  HighValueIcon,
  LowValueIcon,
  TemperatureIcon,
} from "../assets/icons";

function MeasurementCard({ fetchData, data }) {
  return (
    <div className="measurement-card-container">
      <div className="title">
        <div className="day-name">{data.title}</div>
        <div className="date">{data.subtitle}</div>
      </div>
      <hr></hr>
      <div className="measurements-info">
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallTemperature />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">{data.max_temp}°C</div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">{data.min_temp}°C</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              {fetchData.temperature.toFixed(0)}°C
            </span>
          </div>
        </div>
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallHumidity />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">{data.max_humidity}%</div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">{data.min_humidity}%</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              {fetchData.humidity.toFixed(0)}%
            </span>
          </div>
        </div>
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallPollution />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">{data.max_pollution}ppb</div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">{data.min_pollution}ppb</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              {fetchData.pollution}
              <span className="ppb">ppb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;

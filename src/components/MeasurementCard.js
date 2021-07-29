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

function MeasurementCard() {
  return (
    <div className="measurement-card-container">
      <div className="title">
        <div className="day-name">Wed</div>
        <div className="date">07.jul.2021.</div>
      </div>
      <hr></hr>
      <div className="measurements-info">
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallTemperature />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">30°C</div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">22°C</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            / <span className="average-measurement">26°C</span>
          </div>
        </div>
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallHumidity />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">30°C</div>
              </div>
              <div className="min">
                <LowValueIcon />
                <div className="min_reading">22°C</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            / <span className="average-measurement">48%</span>
          </div>
        </div>
        <div className="measurement-podcard">
          <div className="left-podcard">
            <SmallPollution />
            <div className="podcard-info">
              <div className="max">
                <HighValueIcon />
                <div className="max_reading">30°C</div>
              </div>
              <div className="min">
                <LowValueIcon />

                <div className="min_reading">22°C</div>
              </div>
            </div>
          </div>
          <div className="right-podcard">
            /{" "}
            <span className="average-measurement">
              0,60<span className="ppb">ppb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;

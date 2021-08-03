import React from "react";
import "../assets/styles/components/AllDataCard.scss";
import { TemperatureIcon, HumidityIcon, PollutionIcon } from "../assets/icons";
import AllDataCardRow from "./AllDataCardRow";
import useDates from "../hooks/useDates";

const AllDataCard = ({ day }) => {
  const { returnDate, returnDay } = useDates();

  return (
    <div className="all-data-row">
      <div className="header-row">
        <div className="date-time-wrapper">
          <div className="day">{returnDay(day[0].created)}</div>
          <div className="date">{returnDate(day[0].created)}</div>
        </div>
        <div className="data-icon-wrapper">
          <TemperatureIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <HumidityIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <PollutionIcon className="data-icon" />
        </div>
      </div>

      {day.map((hour) => (
        <div className="hour-data">
          <AllDataCardRow hour={hour} key={hour.id} />
        </div>
      ))}
    </div>
  );
};

export default AllDataCard;

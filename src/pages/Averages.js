import React, { useEffect, useState } from "react";
import { MeasurementCard } from "../components";
import "../assets/styles/pages/Averages.scss";

function Averages() {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    fetch("https://airvironment.live/api/measurements?per_page=20").then(
      (response) => response.json().then((r) => setFetchData(r.response))
    );
  }, []);
  console.log(fetchData);
  const data = {
    title: "Mon",
    subtitle: "07.jul.2021.",
    min_temp: 36,
    max_temp: 15,
    min_humidity: 96,
    max_humidity: 42,
    min_pollution: 1,
    max_pollution: 10,
  };
  return fetchData.length ? (
    <div className="averages-container">
      {fetchData.map((card) => (
        <MeasurementCard data={data} fetchData={card} key={card.id} />
      ))}
    </div>
  ) : (
    <div />
  );
}

export default Averages;

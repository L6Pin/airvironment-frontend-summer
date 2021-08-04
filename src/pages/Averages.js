import React, { useEffect, useState } from "react";
import { Filter, MeasurementCard } from "../components";
import "../assets/styles/pages/Averages.scss";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";

function Averages({ averageValues, getAverageValues, filters }) {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
  }, [getAverageValues]);

  return averageValues ? (
    <div className="averages-container">
      {averageValues.map((averageValue, index) => (
        <MeasurementCard
          averageValue={averageValue}
          key={index}
          filters={filters}
        />
      ))}
    </div>
  ) : (
    <div />
  );
}

function mapStateToProps(state) {
  return {
    averageValues: state.averageValues ? state.averageValues : [],
    filters: state.filters,
  };
}
const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Averages);

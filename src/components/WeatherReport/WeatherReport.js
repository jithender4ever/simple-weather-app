import React from "react";
import PropTypes from "prop-types";

function WeatherReport({ weather }) {
  return <div>{weather.description}</div>;
}

WeatherReport.propTypes = {
  weather: PropTypes.object.isRequired
};

WeatherReport.defaultProps = {
  weather: {}
};

export default WeatherReport;

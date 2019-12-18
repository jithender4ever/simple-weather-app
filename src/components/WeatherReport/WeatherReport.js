import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { UNIT_CONFIG } from "../../apiConfig";
import { getDisplayDate } from "../../common/utils";

const styles = {
  cardContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export function WeatherReport({ classes, weather, units }) {
  const weatherClass = `owf owf-${weather && weather.code} owf-8x`;
  const displayDate = useMemo(() => getDisplayDate(weather.timestamp), [
    weather
  ]);

  return (
    <Card raised>
      <CardHeader
        title={
          <Typography variant="h4" color="textPrimary">
            Weather for {weather.city}
          </Typography>
        }
        subheader={
          <Typography variant="h6" color="textSecondary">
            {displayDate}
          </Typography>
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5">
          <i className={weatherClass}></i>
          {` ${weather.temp}`}
          <sup>o</sup>
          {` ${UNIT_CONFIG[units]}`}
        </Typography>
        <Typography gutterBottom>{weather.description}</Typography>
      </CardContent>
    </Card>
  );
}

WeatherReport.propTypes = {
  classes: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired,
  units: PropTypes.string.isRequired
};

WeatherReport.defaultProps = {
  classes: {},
  weather: {},
  units: "Default"
};

export default withStyles(styles)(WeatherReport);

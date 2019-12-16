import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { getDisplayDate, transformData } from "./utils";
import { Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { UNIT_CONFIG } from "../../apiConfig";

const styles = {
  cardContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

function WeatherReport({ classes, weather, units }) {
  const { data } = weather;
  const transformedData = useMemo(() => transformData(data), [data]);

  const weatherClass = `owf owf-${transformedData.code} owf-8x`;

  const displayDate = useMemo(() => getDisplayDate(transformedData.timestamp), [
    transformedData.timestamp
  ]);

  return transformedData ? (
    <Card raised>
      <CardHeader
        title={
          <Typography variant="h4" color="textPrimary">
            Weather for {transformedData.city}
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
          {` ${transformedData.temp}`}
          <sup>o</sup>
          {` ${UNIT_CONFIG[units]}`}
        </Typography>
        <Typography gutterBottom>{transformedData.description}</Typography>
      </CardContent>
    </Card>
  ) : null;
}

WeatherReport.propTypes = {
  classes: PropTypes.object.isRequired,
  units: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};

WeatherReport.defaultProps = {
  classes: {},
  units: "Default",
  weather: {}
};

export default withStyles(styles)(WeatherReport);

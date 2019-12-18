import React, { useCallback, useMemo } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RequestForm from "../RequestForm";
import WeatherReport from "../WeatherReport";
import ErrorBoundary from "../../common/ErrorBoundary";
import * as Actions from "./AppActions";
import { transformData } from "../../common/utils";
import ErrorView from "../ErrorView";

// TODO: Make this a user selection
const UNITS = `Imperial`;

export function App({ getWeather, isFetching, weather, error }) {
  const handleRequestSubmission = useCallback(zipcode => {
    getWeather(UNITS, zipcode);
  }, []);

  const transformedWeather = useMemo(() => transformData(weather), [weather]);

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Typography variant="h3" color="primary">
        Weather App
      </Typography>
      <br />
      <br />
      <ErrorBoundary message="Error while loading RequestForm">
        <RequestForm onRequestSubmit={handleRequestSubmission} />
      </ErrorBoundary>
      <br />
      <Divider />
      <br />

      {/* When data is being fetched from the API, show a loading message.
          When data is fetched, there are 2 possibilities:
            1. data comes back as expected - load the WeatherReport component
            2. there is an error while fetching - display an error message
       */}

      {isFetching ? (
        <Typography variant="caption">
          Loading the weather information
        </Typography>
      ) : error ? (
        <ErrorView message={error} />
      ) : (
        //   Performing this check to make sure it is not an empty object
        Object.keys(transformedWeather).length !== 0 && (
          <ErrorBoundary message="Error while loading WeatherReport">
            <WeatherReport weather={transformedWeather} units={UNITS} />
          </ErrorBoundary>
        )
      )}
    </Grid>
  );
}

function mapStateToProps({ api }) {
  const { data, isFetching, error } = api;

  return { weather: data, isFetching, error };
}

App.propTypes = {
  error: PropTypes.string,
  getWeather: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  weather: PropTypes.object.isRequired
};

App.defaultProps = {
  error: undefined,
  getWeather: () => {},
  isFetching: true,
  weather: {}
};

export default connect(mapStateToProps, Actions)(App);

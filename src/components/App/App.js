import React, { useState, useCallback } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import RequestForm from "../RequestForm";
import WeatherReport from "../WeatherReport";

import { API_URL } from "../../apiConfig";
import { API_KEY } from "../../secrets";

// TODO: Make this a user selection
const UNITS = `Imperial`;

export function App() {
  const [weather, setWeather] = useState();
  const [isFetching, setFetching] = useState(false);

  const handleRequestSubmission = useCallback(zipcode => {
    setFetching(true);
    fetch(`${API_URL}${zipcode}&units=${UNITS}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setFetching(false);
        setWeather({ ...weather, data });
      });
  }, []);

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Typography variant="h3" color="primary">
        Weather App
      </Typography>
      <br />
      <br />
      <RequestForm onRequestSubmit={handleRequestSubmission} />
      <br />
      <Divider />
      <br />
      {isFetching && (
        <Typography variant="caption">
          Loading the weather information
        </Typography>
      )}
      {weather && <WeatherReport weather={weather} units={UNITS} />}
    </Grid>
  );
}

export default App;

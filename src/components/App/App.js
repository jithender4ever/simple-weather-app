import React, { useState, useCallback } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import RequestForm from "../RequestForm";
import WeatherReport from "../WeatherReport";

import { API_URL } from "../../apiConfig";
import { API_KEY } from "../../secrets";

// Could let the user make the choice!
const UNITS = `Imperial`;

export function App() {
  const [weather, setWeather] = useState();

  const handleRequestSubmission = useCallback(zipcode => {
    // TODO: API call goes here...
    fetch(`${API_URL}${zipcode}&units=${UNITS}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => setWeather({ ...weather, data }));
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
      {weather && <WeatherReport weather={weather} units={UNITS} />}
    </Grid>
  );
}

export default App;

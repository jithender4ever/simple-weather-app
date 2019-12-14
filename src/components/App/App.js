import React, { useState } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import RequestForm from "../RequestForm";
import WeatherReport from "../WeatherReport";

export function App() {
  const [weather, setWeather] = useState(undefined);
  const handleRequestSubmission = zipcode => {
    // TODO: API call goes here...
    setWeather({
      description: "It's Chill out there...",
      zipcode
    });
  };

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
      {weather && <WeatherReport weather={weather} />}
    </Grid>
  );
}

export default App;

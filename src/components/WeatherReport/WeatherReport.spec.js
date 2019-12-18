import React from "react";
import { render } from "@testing-library/react";
import { WeatherReport } from "./WeatherReport";

describe("WeatherReport Tests", () => {
  const props = {
    classes: {},
    weather: {
      description: "TEST",
      temp: 100,
      city: "CITY"
    },
    units: "Default"
  };
  it("renders as expected", () => {
    const { queryByText } = render(<WeatherReport {...props} />);

    expect(queryByText(/Weather for CITY/i)).not.toBeNull();
    expect(queryByText(/100/i)).not.toBeNull();
    expect(queryByText(/K/i)).not.toBeNull();
    expect(queryByText(/TEST/i)).not.toBeNull();
  });
});

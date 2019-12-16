import React from "react";
import { render } from "@testing-library/react";
import { WeatherReport } from "./WeatherReport";
import { transformData, getDisplayDate } from "./utils";

describe("WeatherReport Tests", () => {
  const props = {
    classes: {},
    weather: {
      data: {
        weather: [
          {
            description: "TEST"
          }
        ],
        main: {
          temp: 100
        },
        name: "CITY"
      }
    }
  };
  it("renders as expected", () => {
    const { queryByText } = render(<WeatherReport {...props} />);

    expect(queryByText(/Weather for CITY/i)).not.toBeNull();
    expect(queryByText(/100/i)).not.toBeNull();
    expect(queryByText(/K/i)).not.toBeNull();
    expect(queryByText(/TEST/i)).not.toBeNull();
  });

  describe("Util functions", () => {
    describe("transformData", () => {
      it("works as expected, when input is null", () => {
        const actual = transformData(null);

        expect(actual).toEqual(null);
      });

      it("works as expected, when input is undefined", () => {
        const actual = transformData(undefined);

        expect(actual).toEqual(undefined);
      });

      it("works as expected, when input is empty", () => {
        const data = {};
        const actual = transformData(data);

        expect(actual).toBe(data);
      });

      it("works as expected, when there is data", () => {
        const actual = transformData(props.weather.data);
        const expected = {
          description: "TEST",
          temp: 100,
          minTemp: undefined,
          maxTemp: undefined,
          timestamp: undefined,
          city: "CITY",
          code: undefined
        };
        expect(actual).toEqual(expected);
      });
    });

    describe("getDisplayDate", () => {
      it("works as expected, when input is null", () => {
        const actual = getDisplayDate(null);
        expect(actual).toEqual(null);
      });

      it("works as expected, when input is undefined", () => {
        const actual = getDisplayDate(undefined);
        expect(actual).toEqual(undefined);
      });

      it("works as expected, when input is valid", () => {
        const actual = getDisplayDate(1576466317);
        expect(actual).toEqual("Sunday, Dec 15");
      });
    });
  });
});

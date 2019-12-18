import moment from "moment";

export function transformData(data) {
  if (!data || Object.keys(data).length === 0) return data;

  const response = {};

  response["description"] =
    data.weather && data.weather.length && data.weather[0].description;
  response["temp"] = data.main && data.main.temp;
  response["minTemp"] = data.main && data.main.temp_min;
  response["maxTemp"] = data.main && data.main.temp_max;
  response["timestamp"] = data.dt;
  response["city"] = data.name;
  response["code"] = data.cod;

  return response;
}

export function getDisplayDate(ts) {
  if (!ts) return ts;
  const dateObj = new Date(ts * 1000);
  const date = moment(dateObj).format("MMM DD");
  const day = moment(dateObj).format("dddd");

  return `${day}, ${date}`;
}

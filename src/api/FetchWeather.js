import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "ac7d2bf1e3f1ce1ba6b55459251ad8e4";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: api_key,
    },
  });
  return data;
};

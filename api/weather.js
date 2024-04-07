import axios from "axios";

export default class WeatherAPI {
  static async fetchWeatherFromCoords(coords) {
    if (coords !== null) {
      try {
        const data = (
          await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,wind_speed_10m_max&timezone=auto&current_weather=true`
          )
        ).data;

        return data;
      } catch (error) {
        console.warn("Error on fetching weather data", error);
        return null;
      }
    }
  }
  static async fetchCityFromCoords(coords) {
    console.log(coords);
    if (coords !== null) {
      const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`;
      console.log(URL);
      try {
        const {
          address: { city, suburb, county, country },
        } = (await axios.get(URL)).data;
        return city || suburb || county.split(" ")[0] || country;
      } catch (error) {
        console.warn("Error on fetching city data", error);
        return null;
      }
    }
  }
}

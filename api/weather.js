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
  static async fetchCoordsFromCity(city = null) {
    if (city !== null) {
      const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
      console.log(URL);
      try {
        const { results } = (await axios.get(URL)).data || [];
        const data = results[0];
        return { latitude: data.latitude, longitude: data.longitude };
      } catch (error) {
        throw new Error(`No details found for search ${city || ""}`);
      }
    }
  }
}

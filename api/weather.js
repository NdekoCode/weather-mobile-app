import axios from "axios";

export default class WeatherAPI {
    static async fetchWeatherFromCoords(coords){
    return (await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}4&longitude=3${coords.longitude}daily=weathercode,temperature_2m_max,sunrise,sunset,wind_speed_10m_max&timezone=auto&current_weather=true`)).data
    }
}
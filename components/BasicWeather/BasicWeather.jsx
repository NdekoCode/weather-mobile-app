import { Image, View } from "react-native";
import TextWrapper from "../TextWrapper/TextWrapper";
import { s } from "./basicWeather.style";
import { getWeatherInterpretation } from "../../services/weather.service";
const BasicWeather = ({ basicWeatherData }) => {
  const temperature = basicWeatherData.temperature;
  const time = basicWeatherData.time.split("T")[1];
  const weatherCode = getWeatherInterpretation(basicWeatherData.weathercode);
  return (
    <>
      <View style={s.timeType}>
        <TextWrapper style={s.time}>{time}</TextWrapper>
      </View>
      <TextWrapper style={s.city}>{basicWeatherData.city}</TextWrapper>
      {weatherCode?.label && (
        <TextWrapper style={s.typeText}>{weatherCode?.label}</TextWrapper>
      )}
      <View style={s.temperatureContainer}>
        <TextWrapper style={s.temperature}>{temperature}</TextWrapper>
        {weatherCode?.image && (
          <Image style={s.image} source={weatherCode.image} />
        )}
      </View>
    </>
  );
};

export default BasicWeather;

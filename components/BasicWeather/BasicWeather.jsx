import { Image, TouchableOpacity, View } from "react-native";
import TextWrapper from "../TextWrapper/TextWrapper";
import { s } from "./basicWeather.style";
import { getWeatherInterpretation } from "../../services/weather.service";
import Clock from "../Clock/Clock";
const BasicWeather = ({ onPress, basicWeatherData, weatherLocation }) => {
  const temperature = basicWeatherData.temperature;
  const weatherCode = getWeatherInterpretation(basicWeatherData.weathercode);
  return (
    <>
      <Clock time={basicWeatherData.time} />
      <TextWrapper style={s.city}>{weatherLocation}</TextWrapper>
      {weatherCode?.label && (
        <TextWrapper style={s.typeText}>{weatherCode?.label}</TextWrapper>
      )}
      <View style={s.temperatureContainer}>
        <TouchableOpacity onPress={onPress}>
          <TextWrapper style={s.temperature}>{temperature}</TextWrapper>
        </TouchableOpacity>
        {weatherCode?.image && (
          <Image style={s.image} source={weatherCode.image} />
        )}
      </View>
    </>
  );
};

export default BasicWeather;

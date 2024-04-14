import { Image, TouchableOpacity, View } from "react-native";
import TextWrapper from "../TextWrapper/TextWrapper";
import { s } from "./basicWeather.style";
import { getWeatherInterpretation } from "../../services/weather.service";
import { useNavigation } from "@react-navigation/native";
import Clock from "../Clock/Clock";
const BasicWeather = ({ basicWeatherData, weatherLocation }) => {
  const temperature = basicWeatherData.temperature;
  const weatherCode = getWeatherInterpretation(basicWeatherData.weathercode);
  const router = useNavigation();
  const onNavigation = () => {
    router.navigate("Forecast");
  };
  return (
    <>
      <Clock time={basicWeatherData.time} />
      <TextWrapper style={s.city}>{weatherLocation}</TextWrapper>
      {weatherCode?.label && (
        <TextWrapper style={s.typeText}>{weatherCode?.label}</TextWrapper>
      )}
      <View style={s.temperatureContainer}>
        <TouchableOpacity onPress={onNavigation}>
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

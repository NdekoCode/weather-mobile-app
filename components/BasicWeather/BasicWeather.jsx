import { Image, View } from "react-native";
import TextWrapper from "../TextWrapper/TextWrapper";
import { s } from "./basicWeather.style";
const BasicWeather = ({basicWeatherData}) => {
  const temperature = (basicWeatherData.temperature);
  const time = basicWeatherData.time.split("T")[1]
  return (
    <>
      <View style={s.timeType}>
        <TextWrapper style={s.time}>{time}</TextWrapper>
      </View>
      <TextWrapper style={s.city}>{basicWeatherData.city}</TextWrapper>
        <TextWrapper style={s.typeText}>Pluvieux</TextWrapper>
      <View style={s.temperatureContainer}>
        <TextWrapper style={s.temperature}>{temperature}</TextWrapper>
        <Image style={s.image}/>
      </View>
    </>
  );
};

export default BasicWeather;

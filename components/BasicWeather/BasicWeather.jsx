import { Image, View } from "react-native";
import TextWrapper from "../TextWrapper/TextWrapper";
import { s } from "./basicWeather.style";
const BasicWeather = () => {
  return (
    <>
      <View style={s.timeType}>
        <TextWrapper style={s.time}>15:00</TextWrapper>
      </View>
      <TextWrapper style={s.city}>Paris</TextWrapper>
        <TextWrapper style={s.typeText}>Pluvieux</TextWrapper>
      <View style={s.temperatureContainer}>
        <TextWrapper style={s.temperature}>12°</TextWrapper>
        <Image style={s.image}/>
      </View>
    </>
  );
};

export default BasicWeather;

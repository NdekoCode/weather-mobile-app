import { View } from "react-native";
import { s } from "./weatherAdvanced.style";
import TextWrapper from "../TextWrapper/TextWrapper";
const WeatherAdvanced = () => {
  return (
    <View style={s.weatherAdvanced}>
      <View style={s.view}>
        <TextWrapper style={s.text}>SunRise Clock</TextWrapper>
        <TextWrapper style={s.text}>SunRise</TextWrapper>
      </View>
      <View style={s.view}>
        <TextWrapper style={s.text}>SunSet Clock</TextWrapper>
        <TextWrapper style={s.text}>SunSet</TextWrapper>
      </View>

      <View style={s.view}>
        <TextWrapper style={s.text}>Wind SPeed Value</TextWrapper>
        <TextWrapper style={s.text}>Wind Speed</TextWrapper>
      </View>
    </View>
  );
};

export default WeatherAdvanced;

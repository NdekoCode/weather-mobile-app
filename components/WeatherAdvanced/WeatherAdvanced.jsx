import { View } from "react-native";
import { s } from "./weatherAdvanced.style";
const WeatherAdvanced = () => {
  return (
    <View style={s.weatherAdvanced}>
      <View>
        <TextWrapper>SunRise Clock</TextWrapper>
        <TextWrapper>SunRise</TextWrapper>
      </View>
      <View>
        <TextWrapper>SunSet Clock</TextWrapper>
        <TextWrapper>SunSet</TextWrapper>
      </View>

      <View>
        <TextWrapper>Wind SPeed Value</TextWrapper>
        <TextWrapper>Wind Speed</TextWrapper>
      </View>
    </View>
  );
};

export default WeatherAdvanced;

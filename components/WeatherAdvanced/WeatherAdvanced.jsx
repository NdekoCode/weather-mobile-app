import { View } from "react-native";
import { s } from "./weatherAdvanced.style";
import TextWrapper from "../TextWrapper/TextWrapper";
const WeatherAdvanced = () => {
  return (
    <View style={s.weatherAdvanced}>
      <SubComponent value="SunRise Clock" label="SunRise" />
      <SubComponent value="SunSet Clock" label="SunSet" />
      <SubComponent value="Wind SPeed Value" label="Wind Speed" />
    </View>
  );
};

const SubComponent = ({ value, label }) => (
  <View style={s.view}>
    <TextWrapper style={s.firstText}>{value}</TextWrapper>
    <TextWrapper style={s.text}>{label}</TextWrapper>
  </View>
);
export default WeatherAdvanced;

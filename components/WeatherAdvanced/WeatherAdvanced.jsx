import { View } from "react-native";
import { s } from "./weatherAdvanced.style";
import TextWrapper from "../TextWrapper/TextWrapper";
import { formatTime } from "../../services/date.service";
// dusk: L'Aube (Lever de soleil), dawn: Crepuscule (Coucher du soleil), wind: le vent
const WeatherAdvanced = ({dailyData,wind}) => {
  const dusk = formatTime(dailyData.sunrise[0])
  const dawn = formatTime(dailyData.sunrise[1])
  const windSpeed =`${Math.round(wind)} km/h`
  return (
    <View style={s.weatherAdvanced}>
      <SubComponent value={dusk} label="Aube" />
      <SubComponent value={dawn} label="Crepuscule" />
      <SubComponent value={windSpeed} label="Vent" />
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

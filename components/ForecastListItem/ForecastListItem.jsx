import { Image, View } from "react-native";
import { s } from "./forecastListItem.style";
import TextWrapper from "../TextWrapper/TextWrapper";
import Heading from "../Heading/Heading";
const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={s.item}>
      <Image source={ image} style={s.image} />
      <TextWrapper style={s.text}>{day}</TextWrapper>
      <TextWrapper style={s.text}>{date}</TextWrapper>
      <Heading level={2}>{temperature}°C</Heading>
    </View>
  );
};

export default ForecastListItem;

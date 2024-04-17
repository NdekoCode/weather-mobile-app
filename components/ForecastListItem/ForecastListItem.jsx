import { Image, Text, View } from "react-native";
import { s } from "./forecastListItem.style";
const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={s.list}>
      <Image source={{ uri: image }} style={s.image} />
      <Text>{day}</Text>
      <Text>{date}</Text>
      <Text>{temperature}</Text>
    </View>
  );
};

export default ForecastListItem;

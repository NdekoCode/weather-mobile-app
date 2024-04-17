import { StyleSheet, TouchableOpacity, View } from "react-native";
import Heading from "../../components/Heading/Heading";
import { useNavigation, useRoute } from "@react-navigation/native";
import { s } from "./forecast.style";
import ForecastListItem from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/weather.service";
const Forecast = () => {
  const { params } = useRoute();
  const router = useNavigation();
  const backButton = (
    <TouchableOpacity style={s.backButton} onPress={() => router.goBack()}>
      <Heading ng level={2}>
        {"<"}{" "}
      </Heading>
    </TouchableOpacity>
  );
  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.subHeader}>
        <Heading>{params.city}</Heading>
        <Heading fontWeight="600" level={3}>
          Prevision sur 7 jours
        </Heading>
      </View>
    </View>
  );
  const ForeCastList = (
    <View style={s.forecastBody}>
      {params.time.map((time, index) => {
        const date = new Date(time);
        const dateOptions = { weekday: "short" };
        const day = date.toLocaleString("en-US", dateOptions).toUpperCase();
        const temperature = Math.round(params.temperature_2m_max[index]);
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        return (
          <ForecastListItem
            key={time}
            day={day}
            date={time}
            image={image}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
  return (
    <View>
      {header}
      {ForeCastList}
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({});

import { Text, View } from "react-native";
import { s } from "./home.style";
// Pour demander les permissions quand l'application est lancer.
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import WeatherAPI from "../../api/weather";
const Home = () => {
  const [coords, setCoords] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const getUserCoords = async () => {
    // Cette ligne va nous declencher un popup pour nous demander si on autorise à l'application d'acceder à nos coordonner (aux coordonnées de localisation de notre telephone)
    const permission = await requestForegroundPermissionsAsync(); // Nous on va juste recuperer le status avec permission.status.
    const status = permission.status; // status peut avoir deux valeurs: "granted" si l'utilisateur a autorisé ou "no";

    if (status === "granted") {
      const { coords } = await getCurrentPositionAsync();
      const { longitude, latitude } = coords;

      setCoords((prevCoords) => ({ ...prevCoords, longitude, latitude }));
    } else {
      // Si l'utilisateur n'a pas accepter alors je lui suggere les coordonnées de Kinshasa la capital de la RDC.
      setCoords({ latitude: -4.33, longitude: 15.30935141211334 });
    }
  };

  const fetchWeather = async () => {
    const data = await WeatherAPI.fetchWeatherFromCoords(coords);
    if (data) {
      setWeatherData(data);
    }
  };

  useEffect(() => {
    (async () => {
      await getUserCoords();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await fetchWeather();
    })();
  }, [coords]);

  console.log(coords);
  9;
  return (
    <View style={s.container}>
      <View style={s.weatherBasic}>
        {weatherData && <Text>{JSON.stringify(weatherData)}</Text>}
        <Text>Home Header meteo Basic</Text>
      </View>

      <View style={s.searchContainer}>
        <Text>Home Body Search Bar</Text>
      </View>

      <View style={s.weatherAdvanced}>
        <Text>Home footer Meto Avancer Bar</Text>
      </View>
    </View>
  );
};

export default Home;

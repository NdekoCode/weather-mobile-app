import { View } from "react-native";
import { s } from "./home.style";
// Pour demander les permissions quand l'application est lancer.
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import WeatherAPI from "../../api/weather";
import TextWrapper from "../../components/TextWrapper/TextWrapper";
import BasicWeather from "../../components/BasicWeather/BasicWeather";
const Home = () => {
  const [coords, setCoords] = useState(null);
  const [weatherData, setWeatherData] = useState({current_weather:null,current_weather_units:null});
  const [weatherLocation,setWeatherLocation ] = useState("");
  const basicWeatherData  = {}
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
  const fetchCity = async ()=>{
    const location = await WeatherAPI.fetchCityFromCoords(coords);
    if(location){
      setWeatherLocation(location);
    }
  }

  useEffect(() => {
    (async () => {
      await getUserCoords();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await fetchWeather();
      await fetchCity();
    })();
  }, [coords]);
  if(!weatherData.current_weather){
    return null;
  }
  for(let index in weatherData.current_weather_units){
    if(index!=="weathercode" && index!=="time"){
      const intData = parseInt(weatherData.current_weather[index])
      basicWeatherData[index] =`${intData}${weatherData.current_weather_units[index]}`

    }else{
      basicWeatherData[index] =weatherData.current_weather[index]
    }

  }
  return (
  
    <View style={s.container}>
      <View style={s.weatherBasic}>
        <BasicWeather basicWeatherData={basicWeatherData} weatherLocation={weatherLocation} />
      </View>

      <View style={s.searchContainer}>
        <TextWrapper>Home Body Search Bar</TextWrapper>
      </View>

      <View style={s.weatherAdvanced}>
        <TextWrapper>Home footer Meto Avancer Bar</TextWrapper>
      </View>
    </View>
  );
};

export default Home;

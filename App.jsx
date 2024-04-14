import { StyleSheet } from "react-native";
import alataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "./screens/AppContainer";
const navigationTheme = {
  colors: {
    background: "transparent",
  },
};
export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": alataRegular,
  });
  return (
    <NavigationContainer theme={navigationTheme}>
      {isFontLoaded && (<AppContainer />)}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

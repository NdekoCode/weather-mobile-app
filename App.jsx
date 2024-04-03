import { ImageBackground, StyleSheet } from "react-native";
import Home from "./screens/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import bg from "./assets/background.png";
import { appStyle } from "./app.style";
import alataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": alataRegular,
  });
  return (
    <ImageBackground
      source={bg}
      style={appStyle.imageContainer}
      imageStyle={appStyle.appImageStyle}
    >
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.app}>
          {isFontLoaded && <Home />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

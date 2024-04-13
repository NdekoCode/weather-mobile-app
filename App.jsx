import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import bg from "./assets/background.png";
import { appStyle } from "./app.style";
import alataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigationtConfig from "./screens/route.config";
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
      <ImageBackground
        source={bg}
        style={appStyle.imageContainer}
        imageStyle={appStyle.appImageStyle}
      >
        <SafeAreaProvider>
          <SafeAreaView style={appStyle.app}>
            {isFontLoaded && (
              <RootNavigationtConfig/>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

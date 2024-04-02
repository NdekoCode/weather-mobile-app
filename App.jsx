import { ImageBackground, StyleSheet } from "react-native";
import Home from "./screens/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import bg from "./assets/background.png";
import { appStyle } from "./app.style";
export default function App() {
  return (
    <ImageBackground source={bg} style={appStyle.app}>
      <SafeAreaProvider >
        <SafeAreaView style={appStyle.app}>
          <Home />
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

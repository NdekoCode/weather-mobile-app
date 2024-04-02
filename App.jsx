import { ImageBackground, StyleSheet } from "react-native";
import Home from "./screens/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import bg from "./assets/background.png";
export default function App() {
  return (
    <ImageBackground source={bg} style={styles.app}>
      <SafeAreaProvider >
        <SafeAreaView style={styles.app}>
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

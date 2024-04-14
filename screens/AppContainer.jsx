import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appStyle } from "../app.style";

import bg from "../assets/background.png";
import RootNavigationtConfig from "./route.config";
const AppContainer = () => {
  return (
    <ImageBackground
      source={bg}
      style={appStyle.imageContainer}
      imageStyle={appStyle.appImageStyle}
    >
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.app}>
          <RootNavigationtConfig />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default AppContainer;

const styles = StyleSheet.create({});

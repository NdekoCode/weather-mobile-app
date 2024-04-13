import { StyleSheet } from "react-native";
import Home from "./Home/Home";
import Forecast from "./Forecast/Forecast";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const RootNavigationtConfig = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Forecast" component={Forecast} />
    </Stack.Navigator>
  );
};

export default RootNavigationtConfig;

const styles = StyleSheet.create({});

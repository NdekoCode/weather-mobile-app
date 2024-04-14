import { StyleSheet, TouchableOpacity, View } from "react-native";
import Heading from "../../components/Heading/Heading";
import { useNavigation, useRoute } from "@react-navigation/native";
import { s } from "./forecast.style";
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
  return (
    <View>
      {header}
      <Heading>ForeCast</Heading>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({});

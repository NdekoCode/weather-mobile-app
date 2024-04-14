import { StyleSheet, View } from "react-native";
import { s } from "./heading.style";
import TextWrapper from "../TextWrapper/TextWrapper";
const Heading = ({ level = 1 }) => {
  const headingStyle = s[level];
  return (
    <View style={headingStyle.view}>
      <TextWrapper style={headingStyle.text}>Heading</TextWrapper>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});

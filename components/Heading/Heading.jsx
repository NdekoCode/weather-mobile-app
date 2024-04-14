import { StyleSheet, View } from "react-native";
import { s } from "./heading.style";
import TextWrapper from "../TextWrapper/TextWrapper";
const Heading = ({ level = 1,fontWeight="700",children }) => {
  const headingStyle = s[level];
  return (
    <View style={headingStyle.view}>
      <TextWrapper style={{...headingStyle.text,fontWeight}}>{children}</TextWrapper>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});

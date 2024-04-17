import { Text, useWindowDimensions } from "react-native";
import { textStyle } from "./text.style";
const TextWrapper = ({ style, children }) => {
  const dimensions = useWindowDimensions();
  const fontSize = style?.fontSize || textStyle.textFont.fontSize;
  const fontBase = 1 / dimensions.height;
  const fontSizeStyle = fontSize * fontBase * dimensions.height;
  console.log(fontSizeStyle);
  return (
    <Text style={[textStyle.textFont, style, { fontSize: fontSizeStyle }]}>
      {children}
    </Text>
  );
};

export default TextWrapper;

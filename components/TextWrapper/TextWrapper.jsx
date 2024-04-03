import { Text } from 'react-native';
import { textStyle } from './text.style';
const TextWrapper = ({style,children}) => {
  return (
      <Text style={[textStyle.textFont,style]}>{children}</Text>
  )
}

export default TextWrapper

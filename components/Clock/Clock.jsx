import { View } from 'react-native';
import { clockStyle } from './clock.style';
import TextWrapper from '../TextWrapper/TextWrapper';

const Clock = ({time}) => {

  const timeFormat = time.split("T")[1];
  return (
    <View style={clockStyle.timeType}>
      <TextWrapper>{timeFormat}</TextWrapper>
    </View>
  )
}

export default Clock

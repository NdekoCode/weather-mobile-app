import { View } from 'react-native';
import { clockStyle } from './clock.style';
import TextWrapper from '../TextWrapper/TextWrapper';

const Clock = ({time}) => {

    const date = new Date(time);
    const timeFormat = `${date.getHours()}:${date.getMinutes()}${date.getSeconds()}`;;
  return (
    <View style={clockStyle.timeType}>
      <TextWrapper>{timeFormat}</TextWrapper>
    </View>
  )
}

export default Clock

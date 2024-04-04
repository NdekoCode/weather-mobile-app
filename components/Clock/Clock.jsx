import { View } from 'react-native';
import { clockStyle } from './clock.style';
import TextWrapper from '../TextWrapper/TextWrapper';
import { formatTime } from '../../services/date.service';

const Clock = ({time}) => {

    const timeFormat = formatTime(time)
  return (
    <View style={clockStyle.timeType}>
      <TextWrapper>{timeFormat}</TextWrapper>
    </View>
  )
}

export default Clock

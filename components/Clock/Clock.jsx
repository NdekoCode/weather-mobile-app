import { View } from "react-native";
import { clockStyle } from "./clock.style";
import TextWrapper from "../TextWrapper/TextWrapper";
import { formatTime } from "../../services/date.service";
import { useEffect, useState } from "react";

const Clock = () => {
  const [timeFormat, setTimeFormat] = useState(formatTime());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeFormat(formatTime());
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View style={clockStyle.timeType}>
      <TextWrapper>{timeFormat}</TextWrapper>
    </View>
  );
};

export default Clock;

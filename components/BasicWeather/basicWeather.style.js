import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  timeType:{
   alignSelf:'flex-end'
  },
  city:{
    fontSize:40
  },
  temperatureContainer:{
    flexDirection:'row',
    alignItems:'baseline',
    justifyContent:'space-between',
    marginTop:'auto'
  },
  temperature:{
    fontSize:160,
  },
  typeText:{
    fontSize:20,
    alignSelf:'flex-end',
    transform:[{rotate:'-90deg', },{translateX:0}]
  },
  image:{
    width:90,
    aspectRatio:1,
    backgroundColor:'green'
  }
});

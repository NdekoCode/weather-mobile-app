import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
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
    fontSize:120,
  },
  typeText:{
    fontSize:20,
    alignSelf:'flex-end',
    transform:[{rotate:'-90deg', },{translateX:0}]
  },
  image:{
    width:90,
    aspectRatio:1,
  }
});

import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:10,
    },
    image:{
        width:50,
        aspectRatio:1,
    },
    text:{
        fontSize:20
    }

});
export { s };

import { StyleSheet } from "react-native";

const s = StyleSheet.create({

    weatherAdvanced:{
        flex:1,
        height:'auto',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        backgroundColor:'rgba(0,0,0,0.25)',
        borderWidth:2,
        borderColor:'#f1f1f1',
        borderRadius:15,
    },
    view:{
        width:'100%',
        flexShrink:1,
    },

    text:{
        textAlign:'center',
        marginBottom:5,
    }
})
export {s}
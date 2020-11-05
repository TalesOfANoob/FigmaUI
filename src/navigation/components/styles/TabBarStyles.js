/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        flexDirection:'row',
        overflow:'hidden',
        width:'100%',
        backgroundColor:'white',
        height:RFValue(55),
        borderTopRightRadius:RFValue(20),
        borderTopLeftRadius:RFValue(20),
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    icon:{
        fontSize:RFValue(30),
        color:'rgba(0,0,0,0.3)',
    },
    iconSelected:{
        fontSize:RFValue(35),
        color:'#46D0D9',
    },

});

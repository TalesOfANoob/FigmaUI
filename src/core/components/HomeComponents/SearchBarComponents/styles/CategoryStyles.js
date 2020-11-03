/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    defaultContainer:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:RFValue(10),
    },
    container:{
        width:RFValue(75),
        height:RFValue(75),
        backgroundColor:'#FFFFFF',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    selectedContainer:{
        width:RFValue(75),
        height:RFValue(100),
        backgroundColor:'#46D0D9',
    },
    title:{
        marginTop:RFValue(15),
        fontSize:RFValue(18),
        fontWeight:'bold',
        color:'#FFFFFF',
    },


});

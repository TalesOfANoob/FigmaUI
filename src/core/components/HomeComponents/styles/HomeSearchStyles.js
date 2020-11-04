/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        height:RFValue(50),
        alignSelf:'center',
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(29, 40, 142, 0.07)',
        shadowOffset: {
        width: 0,
        height: RFValue(5),
        },
        shadowOpacity: RFValue(0.34),
        shadowRadius: RFValue(10),
        elevation: RFValue(15),
        borderRadius: RFValue(10),
        marginTop:RFValue(30),
        paddingHorizontal:RFValue(20),
    },
    inputContainer:{
        borderBottomWidth:0,
    },
    inputStyle:{
        paddingLeft:RFValue(10),
        fontSize:RFValue(16),
    },
    leftIcon:{
        width:RFValue(20),
        height:RFValue(20),
    },
    rightIcon:{
        width:RFValue(22),
        height:RFValue(20),
    }
});
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../themes/colors';
export default StyleSheet.create({

    container:{
        height:50,
        width:'99%',
        alignSelf:'center',
        backgroundColor: colors.backgroundWhite,
        shadowColor: 'rgba(29, 40, 142, 0.07)',
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 10,
        elevation: 4,
        borderRadius: 10,
        marginTop:30,
        paddingHorizontal:20,
    },
    inputContainer:{
        borderBottomWidth:0,
    },
    inputStyle:{
        paddingLeft:10,
        fontSize:RFValue(16),
    },
    leftIcon:{
        width:RFValue(20),
        height:RFValue(20),
    },
    rightIcon:{
        width:RFValue(22),
        height:RFValue(20),
    },
});

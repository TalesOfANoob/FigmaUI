/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../core/themes/colors';

export default StyleSheet.create({

    container:{
        flexDirection:'row',
        overflow:'hidden',
        width:'100%',
        backgroundColor:colors.backgroundWhite,
        height:55,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    icon:{
        fontSize:RFValue(30),
        color: colors.iconGrey,
    },
    iconSelected:{
        fontSize:RFValue(30),
        color: colors.iconCyan,
    },

});

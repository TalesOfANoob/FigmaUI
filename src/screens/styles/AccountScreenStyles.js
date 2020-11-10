/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../core/themes/colors';
export default StyleSheet.create({
    container:{
    },
    backIconContainer:{
        position:'relative',
        left:RFValue(15),
        top:RFValue(15),
    },
    backIcon:{
        fontSize:RFValue(30),
    },
    headerContainer:{
        marginTop:30,
        flexDirection:'row',
        height:100,
        marginHorizontal:50,
    },
    leftSection:{
        alignItems:'flex-start',
        justifyContent:'center',
        flex:1,
    },
    rightSection:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    name:{
        fontSize:RFValue(20),
        color:colors.fontBlue,
        fontWeight:'bold',
    },
    locationContainer:{
        flexDirection:'row',
    },
    locIcon:{
        fontSize:RFValue(15),
        color:colors.fontBlue,
    },
    locationText:{
        fontSize:RFValue(12),
        color:colors.fontBlue,
    },
    profilePic:{
        width:90,
        height:90,
        borderRadius:RFValue(90) / 2,
    },
    starContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        marginVertical:4,

    },
    star:{
        width:RFValue(13),
        height:RFValue(13),
        marginRight:RFValue(2),
    },
    opinions:{
        marginLeft:7,
        fontSize:RFValue(12),
        color: colors.fontLightGrey,
    },

});

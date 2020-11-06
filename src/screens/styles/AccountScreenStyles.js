/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    container:{
    },
    backIconContainer:{
        position:'relative',
        left:RFValue(25),
    },
    backIcon:{
        fontSize:RFValue(30),
    },
    headerContainer:{
        flexDirection:'row',
        width:'75%',
        height:145,
        alignSelf:'center',
    },
    leftSection:{
        alignItems:'flex-start',
        justifyContent:'center',
        borderWidth:1,
        flex:1,
    },
    rightSection:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        flex:1,
    },
    name:{

    },
    locationContainer:{

    },
    locationText:{

    },
    profilePic:{
        width:RFValue(90),
        height:RFValue(90),
        borderRadius:RFValue(90) / 2,
    },
    starContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',

    },
    star:{
        width:RFValue(10),
        height:RFValue(10),
        marginRight:RFValue(2),
    },
    opinions:{
        fontSize:RFValue(12),
        color:'rgba(0,0,0,0.2)',
    },

});

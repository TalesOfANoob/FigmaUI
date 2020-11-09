/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
        fontSize:RFValue(20),
        color:'#143656',
        fontWeight:'bold',
    },
    locationContainer:{
        flexDirection:'row'
    },
    locationText:{
        fontSize:RFValue(12),
        color:'#143656',
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
        color:'rgba(0,0,0,0.2)',
    },

});

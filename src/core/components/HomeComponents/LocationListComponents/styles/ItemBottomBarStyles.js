/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        alignSelf:'center',
        width:'100%',
        height:100,
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        borderRadius:20,
        overflow:'hidden',
        paddingHorizontal:20,
        paddingVertical:10,
    },
    sectionContainer:{
        flexDirection:'row',
        width:'100%',
        height:65,
    },
    leftSection:{

        flex:1,
        justifyContent:'space-evenly',

    },
    rightSection:{

        flex:1.8,
        justifyContent:'space-evenly',
    },
    ownerContainer:{flexDirection:'row'},

    profilePic:{
        width:20,
        height:20,
        borderRadius:10,
    },
    name:{
        fontSize:RFValue(21),
        color:'#143656',
    },
    owner:{
        textAlignVertical:'center',
        fontSize:RFValue(12),
        color:'#143656',
    },
    reviewContainer:{
        flexDirection:'row',
    },
    starsContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    star:{
        marginRight:RFValue(1),
    },
    reviews:{
        fontSize:RFValue(10),
        color:'rgba(0, 0, 0, 0.2)',
        textAlignVertical:'center',
        marginLeft:5,
    },
    price:{
        fontSize:RFValue(19),
        fontWeight:'bold',
        color:'#143656',
    },
    specsContainer:{
        flexDirection:'row',
    },
    specContainer:{
        flexDirection:'row',
        marginRight:10,
    },
    spec:{
        fontSize:RFValue(13),
    },
    specIcon:{
        alignSelf:'center',
        width:RFValue(13),
        height:RFValue(11),
    },
    specText:{
        color:'#8A9BAB',
        fontSize:RFValue(13),
        marginLeft:RFValue(1),
    },

});

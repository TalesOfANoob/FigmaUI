/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        flexDirection:'row',
        alignSelf:'center',
        width:'99.85%',
        height:RFValue(100),
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        borderRadius:RFValue(20),
        overflow:'hidden',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(10),
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
        width:RFValue(20),
        height:RFValue(20),
        borderRadius:RFValue(10),
    },
    name:{
        fontSize:RFValue(21),
        color:'#143656',
    },
    owner:{
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
        marginRight:RFValue(2),
    },
    reviews:{
        fontSize:RFValue(10),
        color:'rgba(0, 0, 0, 0.2)',
        textAlignVertical:'center',
        marginLeft:RFValue(5),
    },
    price:{
        fontSize:RFValue(18),
        fontWeight:'bold',
        color:'#143656',
    },
    specsContainer:{
        flexDirection:'row',
    },
    specContainer:{
        flexDirection:'row',
        marginRight:RFValue(10),
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
        marginLeft:RFValue(5),
    },

});

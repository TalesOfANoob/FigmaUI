/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../../themes/colors'
export default StyleSheet.create({

    container:{
        alignSelf:'center',
        width:'100%',
        height:100,
        backgroundColor:colors.backgroundWhite,
        position:'absolute',
        bottom:0,
        borderRadius:20,
        overflow:'hidden',
        paddingHorizontal:20,
        paddingTop:15,
    },
    sectionContainer:{
        flexDirection:'row',
        width:'100%',
        height:65,
    },
    leftSection:{

        flex:1,
        justifyContent:'space-evenly',
        paddingBottom:19,

    },
    rightSection:{

        flex:1.8,
        justifyContent:'space-evenly',
        paddingBottom:19,
    },
    ownerContainer:{flexDirection:'row'},

    profilePic:{
        width:20,
        height:20,
        borderRadius:10,
    },
    name:{
        fontSize:RFValue(21),
        color:colors.fontBlue,
    },
    owner:{
        textAlignVertical:'center',
        fontSize:RFValue(12),
        color:colors.fontBlue,
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
        color:colors.fontLightGrey,
        textAlignVertical:'center',
        marginLeft:5,
    },
    price:{
        fontSize:RFValue(19),
        fontWeight:'bold',
        color:colors.fontBlue,
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
        color:colors.fontGrey,
        fontSize:RFValue(13),
        marginLeft:RFValue(6),
    },

});

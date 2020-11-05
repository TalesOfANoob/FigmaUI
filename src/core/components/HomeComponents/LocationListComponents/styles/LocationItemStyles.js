/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        alignSelf:'center',
        overflow:'hidden',
        height:310,
        width:'98%',
        marginHorizontal:20,
        borderRadius:20,
        marginBottom:15,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    backgroundStyle:{
        flex:1,
    },
    favIconContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:35,
        height:35,
        borderRadius:17.5,
        position:'absolute',
        right:38,
        bottom:85,
        zIndex:1,
        backgroundColor:'#FFFFFF',
        shadowColor: 'rgba(45, 87, 137, 0.25)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    favIcon:{
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:RFValue(20),
    },
    favIconEnabled:{
        color:'#EB5A7C',

    },
    favIconDisabled:{
        color:'#8A9BAB',

    },
    locIcon:{
        fontSize:RFValue(15),
    },
    locationText:{
        backgroundColor:'rgba(255, 255, 255, 0.66)',
        position:'absolute',
        left:15,
        top:15,
        paddingHorizontal:15,
        paddingVertical:4,
        borderRadius:50,
        color:'#143666',
    },


});

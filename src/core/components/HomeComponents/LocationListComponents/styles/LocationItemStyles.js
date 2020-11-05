/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        alignSelf:'center',
        overflow:'hidden',
        height:RFValue(310),
        width:'98%',
        marginHorizontal:RFValue(20),
        borderRadius:RFValue(20),
        marginBottom:RFValue(10),

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
        width:RFValue(35),
        height:RFValue(35),
        borderRadius:RFValue(17.5),
        position:'absolute',
        right:RFValue(35),
        bottom:RFValue(85),
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
        backgroundColor:'rgba(200, 200, 210, 0.4)',
        position:'absolute',
        left:RFValue(15),
        top:RFValue(15),
        paddingHorizontal:RFValue(15),
        paddingVertical:RFValue(4),
        borderRadius:RFValue(50),
        color:'#143666',
    },


});

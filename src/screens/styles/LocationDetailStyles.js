/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../core/themes/colors';
export default StyleSheet.create({
    
    locationImage:{
        width:'100%',
        height:405,
    },
    topButtonContainer:{

        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:85,
    },
    backIconContainer:{
        width:42,
        height:42,
        backgroundColor:'white',
        borderRadius:21,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'rgba(45, 87, 137, 0.25)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    backIcon:{
        fontSize:RFValue(30),
        color:colors.fontBlue,
    },
    availability:{
        width:120,
        height:30,
        borderRadius:50,
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:RFValue(13),
    },
    available:{backgroundColor:colors.availableGreen},

    unAvailable:{backgroundColor:colors.unAvailableRed},

    favIcon:{
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:RFValue(20),
    },
    favIconEnabled:{
        color:colors.iconEnabled,

    },
    favIconDisabled:{
        color:colors.iconDisabled,

    },
    favIconContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:38,
        height:38,
        borderRadius:19,
        zIndex:1,
        backgroundColor:'#FFFFFF',
        shadowColor: 'rgba(45, 87, 137, 0.25)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,


    },
    locationInfo:{
        backgroundColor:colors.backgroundWhite,
        position:'relative',
        top:-30,
        borderRadius:32,
        paddingVertical:40,
    },
    infoHeader:{
        flexDirection:'row',
        paddingHorizontal:25,
        width:'100%',
    },
    locationTextContainer:{
        flexDirection:'row',
    },
    locationText:{
        fontSize:RFValue(12),
        color:colors.fontBlue,
        marginLeft:RFValue(2),
    },
    locationIcon:{
        fontSize:RFValue(13),
        color:colors.fontBlue,
        textAlignVertical:'center',
    },
    name:{
        fontSize:RFValue(26),
        fontWeight:'bold',
        color:colors.fontBlue,
        textAlignVertical:'center',
    },
    infoHeaderPic:{
        width:RFValue(40),
        height:RFValue(40),
        borderRadius:RFValue(20),
        marginRight:0,
        marginLeft:'auto',
        alignSelf:'center',
    },
    facilities:{
        flexDirection:'row',
        marginTop:11,
        paddingHorizontal:25,
    },
    facilityText:{
        color:colors.fontGrey,
        fontSize:RFValue(13),
    },
    dot:{
        fontSize:RFValue(20),
        textAlign:'center',
        textAlignVertical:'center',
        color:colors.iconCyan,
        marginHorizontal:5,
    },
    specsContainer:{
        flexDirection:'row',
        marginTop:20,
        paddingHorizontal:25,
    },
    specContainer:{
        flexDirection:'row',
    },
    specIcon:{
        color:colors.iconCyan
    },
    specText:{
        color:colors.fontLightGrey
    },
});

/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../themes/colors';
export default StyleSheet.create({

    container:{
        width:'100%',
        borderRadius:32,
        overflow:'hidden',
        paddingHorizontal:20,
        paddingVertical:30,
        marginTop:30,
        backgroundColor:colors.backgroundCyan,

    },

    statsList:{
        width:'100%',
        height:125,
        borderRadius:20,
        marginBottom:24,
    },

    statsContainer:{
        width:230,
        height:125,
        borderRadius:20,
        backgroundColor:colors.backgroundWhite,
        marginRight:15,

    },

    statsHeader:{
        flex:1,
        color:colors.fontBlue,
        fontSize:RFValue(12),
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center',

    },
    estatisticsMiddleSection:{
        flexDirection:'row',
        flex:4,
    },
    estatisticsLevelContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    estatisticsLevelTextContainer:{
        position:'absolute',
    },
    estatisticsLevelText:{
        textAlign:'center',
        color:colors.fontBlue,
        fontSize:RFValue(16),
        letterSpacing:RFValue(1),
        fontWeight:'bold',
        textAlignVertical:'center',


    },
    estatisticsLevelSubText:{
        textAlign:'center',
        color:colors.fontBlue,
        fontSize:RFValue(8),
        position:'relative',
        top:'-16%',
    },

    estatisticsTextContainer:{
        flex:1,
        justifyContent:'space-evenly',
    },
    estatisticsTextSubContainer:{
        flexDirection:'row',
    },
    estatisticsText:{
        fontSize:RFValue(12),
        color:colors.fontBlue,
        flex:1,
        textAlignVertical:'center',
        paddingLeft:RFValue(5),
    },

    estatisticsSaleIcon:{

        fontSize:RFValue(30),
        color:colors.iconCyan,
        textAlignVertical:'center',
        textAlign:'center',
        paddingHorizontal:RFValue(5),
    },

    estatisticsClientIcon:{

        fontSize:RFValue(22),
        color:colors.iconCyan,
        textAlignVertical:'center',
    },
    goldHeader:{
        fontSize:RFValue(20),
        fontWeight:'bold',
        color:colors.fontBlue,
        marginBottom:8,
    },
    estatisticsFooter:{
        flex:1,
        color:colors.iconCyan,
        fontSize:RFValue(8),
        textAlign:'center',
        textAlignVertical:'center',
    },
    infoText:{
        color:colors.fontLightGrey,
        fontSize:RFValue(11),
        letterSpacing:-0.3,
        marginTop:5,
        paddingHorizontal:15,
        flex:5,
    },
});

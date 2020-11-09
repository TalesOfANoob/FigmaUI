/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({

    container:{
        backgroundColor:'#e0f0ff',
        width:'100%',
        borderRadius:32,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    statsContainer:{
        width:230,
        height:125,
        backgroundColor:'white',
    },
    estatisticsMiddleSection:{
        flexDirection:'row',
        flex:6,
        backgroundColor:'red',
    },
    estatisticsLevelContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    estatisticsCircle:{
        backgroundColor:'red',
        position:'absolute',
    },
    estatisticsLevelTextContainer:{
        position:'absolute',
    },
    estatisticsLevelText:{
        textAlign:'center',

    },
    estatisticsTextContainer:{
        flex:1,
        backgroundColor:'pink',
    },

    statsList:{
        width:'100%',
        height:400,
    },
    goldHeader:{
        fontSize:RFValue(20),
        fontWeight:'bold',
        color:'#143656',
    },
    estatisticsHeader:{
        flex:1,
    },
    estatisticsFooter:{
        flex:1,
    },
    info:{

    },
});

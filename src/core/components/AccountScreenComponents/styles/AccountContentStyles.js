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
    statsBottomContainer:{
        backgroundColor:'cyan',
        flexDirection:'row',
        flex:1,
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
    estatisticsTitle:{
        fontSize:RFValue(12),
        color:'#143656',
        fontWeight:'bold',
    },
    level:{
        fontSize:RFValue(16),
        color:'#143656',
        fontWeight:'bold',
        position:'absolute',
    },
    levelContainer:{
        flex:1,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center',
    },
    estText:{
        fontSize:RFValue(12),
        color:'#143656',
    },
    estTextContainer:{
        flex:1,
        backgroundColor:'grey',
    },
    info:{

    },
});

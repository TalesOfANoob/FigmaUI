/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
    topBar:{
        marginTop:RFValue(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    icon: {
    fontSize:RFValue(19),
    color:'#143656',
    marginHorizontal:RFValue(7),
},
  location:{
    flexDirection:'row',
    flex:5,
    alignItems:'center',
    justifyContent:'center',
  },
  locationText:{
      textAlign:'center',
      color:'#143656',
      fontSize:RFValue(15),
  },
  profilePic:{
    width:RFValue(50),
    height:RFValue(50),
    borderRadius: RFValue(50) / 2,
  },
  hello:{
    marginTop:RFValue(30),
    color:'#B3B3B3',
    fontSize:RFValue(20),
  },
  look:{
    color:'#143656',
    fontSize:RFValue(20),
  },
});

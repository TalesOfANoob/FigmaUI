/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../themes/colors';
export default StyleSheet.create({
    topBar:{
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
      fontSize:RFValue(19),
      color:colors.fontBlue,
      marginHorizontal:7,
  },
  location:{
    flexDirection:'row',
    flex:5,
    alignItems:'center',
    justifyContent:'center',
  },
  locationText:{
      textAlign:'center',
      color:colors.fontBlue,
      fontSize:RFValue(15),
  },
  profilePic:{
    width:50,
    height:50,
    borderRadius: 50 / 2,
  },
  hello:{
    marginTop:30,
    color:colors.fontGrey,
    fontSize:RFValue(20),
  },
  look:{
    color: colors.fontBlue,
    fontSize:RFValue(20),
  },
});

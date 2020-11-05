/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
        flexDirection: 'row',
        width:'86%',
        marginTop:25,
  },
  optionText:{
        fontFamily:'Rubick-Regular',
        fontSize:RFValue(15),
  },
  option1: {
        flex:1,
  },
  option1Text: {

        color:'rgba(0, 0, 0, 0.8)',

  },
  option2: {
        flex:1,
  },
  option2Text: {

        color:'#13497B',
        textAlign: 'right',
        fontWeight:'bold',
    },
});

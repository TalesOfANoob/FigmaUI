/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../themes/colors';
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

        color:colors.fontOption1,

  },
  option2: {
        flex:1,
  },
  option2Text: {

        color:colors.fontOption2,
        textAlign: 'right',
        fontWeight:'bold',
    },
});

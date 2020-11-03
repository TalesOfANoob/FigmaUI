/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStyle: {
    flex: 3,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeIcon:{
    width:'43%',
    height:RFValue(110),
  },

});

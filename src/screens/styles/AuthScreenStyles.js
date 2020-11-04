/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  scroll:{
    flexGrow:1,
  },
  container: {
    flex: 1,
  },
  topHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStyle: {
    marginTop:RFValue(75),
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeIcon:{
    marginTop:RFValue(25),
    width:'43%',
    height:RFValue(110),
  },

});

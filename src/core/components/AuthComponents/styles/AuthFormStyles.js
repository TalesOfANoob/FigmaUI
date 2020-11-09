/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../../themes/colors';
export default StyleSheet.create({
  header: {
    marginTop:75,
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    color: colors.fontAuthBlue,
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(20),
    fontWeight: '300',
    color: colors.fontGrey,
    textAlign: 'center',
    marginBottom:30,
  },
  container: {
    width: '90%',
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: colors.backgroundWhite,
    shadowColor: 'rgba(29, 40, 142, 0.07)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    paddingLeft:20,
    paddingRight:15,
  },
  input:{
    fontSize:RFValue(15),
    fontFamily:'Rubick-Regular',
    color: colors.fontOption1,
  },
  passInput:{
    fontSize:RFValue(25),
    fontFamily:'Rubick-Regular',
    color: colors.fontOption1,
  },
  passIcon: {
    width: 19,
    height: 12.15,
  },
  userIcon: {
    width: 16,
    height: 17,
  },
  inputLabel: {
    marginBottom: 10,
    color: colors.fontAuthBlue,
    fontSize: RFValue(15),
  },
  formButtonContainer:{
    width:'86%',
    shadowColor: 'rgba(29, 40, 142, 0.07)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  formButton:{

    paddingVertical:15,
    backgroundColor: colors.fontAuthBlue,
    borderRadius: 10,
  },
  componentContainer:{
    width:'100%',
    alignItems:'center',
  },
});

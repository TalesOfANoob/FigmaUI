/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  header: {
    marginTop:RFValue(75),
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    color: '#13497B',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Rubik-Regular',
    fontSize: RFValue(20),
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    marginBottom:RFValue(30),
  },
  container: {
    width: '90%',
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(29, 40, 142, 0.07)',
    shadowOffset: {
      width: 0,
      height: RFValue(5),
    },
    shadowOpacity: RFValue(0.34),
    shadowRadius: RFValue(6.27),
    elevation: RFValue(10),
    borderRadius: RFValue(10),
    paddingLeft:RFValue(20),
    paddingRight:RFValue(15),
  },
  input:{
    fontSize:RFValue(15),
    fontFamily:'Rubick-Regular',
    color:'rgba(0,0,0,0.8)',
  },
  passInput:{
    fontSize:RFValue(25),
    fontFamily:'Rubick-Regular',
    color:'rgba(0,0,0,0.8)',
  },
  passIcon: {
    width: RFValue(19),
    height: RFValue(12.15),
  },
  userIcon: {
    width: RFValue(16),
    height: RFValue(17),
  },
  inputLabel: {
    marginBottom: RFValue(10),
    color: '#13497B',
    fontSize: RFValue(15),
  },
  formButtonContainer:{
    width:'86%',
    shadowColor: 'rgba(29, 40, 142, 0.07)',
    shadowOffset: {
      width: 0,
      height: RFValue(5),
    },
    shadowOpacity: RFValue(0.34),
    shadowRadius: RFValue(6.27),
    elevation: RFValue(10),
  },
  formButton:{

    paddingVertical:RFValue(15),
    backgroundColor: '#13497B',
    borderRadius: RFValue(10),
  },
  componentContainer:{
    width:'100%',
    alignItems:'center',
  },
});

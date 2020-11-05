/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  header: {
    marginTop:75,
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
    marginBottom:30,
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
    color:'rgba(0,0,0,0.8)',
  },
  passInput:{
    fontSize:RFValue(25),
    fontFamily:'Rubick-Regular',
    color:'rgba(0,0,0,0.8)',
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
    color: '#13497B',
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
    backgroundColor: '#13497B',
    borderRadius: 10,
  },
  componentContainer:{
    width:'100%',
    alignItems:'center',
  },
});

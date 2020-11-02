/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput,StyleSheet,ImageBackground} from 'react-native';
import {Button,Input} from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import { width } from '../utils/metrics';
const AuthForm = ({headerText,submitText,onSubmit})=>{


    return (

        <View>
            <Text style={styles.header}>
                Welcome
            </Text>
            <Text style={styles.subHeader}>
                {`${headerText} to enjoy findhome`}
            </Text>

            <Input
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            autoCapitalize="none"
            placeholder="Enter email"
            rightIconContainerStyle={styles.iconContainer}
            rightIcon={
                <ImageBackground style={styles.userIcon} source={require('../resources/UserConfirmIcon.png')}/>
            }

            label={<Text style={styles.inputLabel}>Email</Text>}
            />

            <Input
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Enter password"
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            rightIconContainerStyle={styles.iconContainer}
            rightIcon={
                <ImageBackground style={styles.passIcon} source={require('../resources/ShowPassIcon.png')}/>
            }

            label={<Text style={styles.inputLabel}>Password</Text>}
            />
            <View>
                <Button
                title={submitText}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    header:{
        fontFamily:'Rubik-Regular',
        fontSize:RFValue(40),
        fontWeight:'bold',
        color:'#13497B',
        textAlign:'center',

    },
    subHeader:{
        fontFamily:'Rubik-Regular',
        fontSize:RFValue(20),
        fontWeight:'300',
        color:'rgba(0, 0, 0, 0.3)',
        textAlign:'center',
    },
    container:{
        width:RFValue(355),

    },
    inputContainer:{
        borderBottomWidth:0,
        backgroundColor:'#FFFFFF',
        shadowColor: 'rgba(29, 40, 142, 0.07)',
        shadowOffset: {
	    width: 0,
	    height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius:RFValue(10),
    },
    iconContainer:{
        width:RFValue(20),
        alignItems:'center',
        paddingRight:RFValue(25),
    },
    passIcon:{
        width:RFValue(19),
        height:RFValue(12.15),
    },
    userIcon:{
        width:RFValue(16),
        height:RFValue(17),
    },
    inputLabel:{
        marginBottom:RFValue(10),
        color:'#13497B',
        fontSize:RFValue(15),
    },


});

export default AuthForm;

/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, StyleSheet, Text,ImageBackground} from 'react-native';
import {AuthBottomOptions, AuthForm} from '../components';
const LoginScreen = () => {

  return (
    <View style={styles.container}>
            <ImageBackground style={{flex:1}} source={require('../resources/AuthBackground.png')}>
            <View style={styles.topHeader}><ImageBackground style={{width:200,height:130}} source={require('../resources/WelcomeIcon.png')}/></View>
            <View style={styles.formStyle}>
                <AuthForm headerText="Login" submitText="Login"/>
                <AuthBottomOptions/>
            </View>
        </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    topHeader:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    formStyle:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },

});

export default LoginScreen;
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AuthForm} from '../components';
const SignUpScreen = () => {

    

  return (
    <View>
      <AuthForm headerText="Sign up" submitText="Sign Up" />
    </View>
  );
};


const styles= StyleSheet.create({});

export default SignUpScreen;
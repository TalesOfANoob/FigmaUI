/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthBottomOptionsStyles as styles} from './styles'
const AuthBottomOptions = ({option1Text,option2Text})=>{

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.option1}>
                <Text style={[styles.option1Text,styles.optionText]} >{option1Text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option2}>
                <Text style={[styles.option2Text,styles.optionText]} >{option2Text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AuthBottomOptions;

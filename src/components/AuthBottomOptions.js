/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AuthBottomOptions = ()=>{

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.option1}>
                <Text style={styles.option1Text} >option1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option2}>
                <Text style={styles.option2Text} >option2</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container:{

        flexDirection:'row',
    },
    option1:{
        flex:1,
    },
    option1Text:{
        paddingLeft:10,
    },
    option2:{
        flex:1,
    },
    option2Text:{
        textAlign:'right',
        paddingRight:10,
    },

});

export default AuthBottomOptions;

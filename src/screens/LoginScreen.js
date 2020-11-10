/* eslint-disable prettier/prettier */
import React from 'react';
import {View,ScrollView,ImageBackground,Image} from 'react-native';
import {AuthBottomOptions, AuthForm} from '../core/components/AuthComponents';
import {AuthScreenStyles as styles} from './styles';
import {LoginStrings as strings} from './static';
import {AuthBackground,WelcomeIcon} from '../core/resources';
const LoginScreen = ({navigation}) => {

  return (

    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
            <ImageBackground style={{flex:1}} source={AuthBackground}>
            <View style={styles.topHeader}>
              <Image style={styles.welcomeIcon} source={WelcomeIcon}/>
            </View>
            <View style={styles.formStyle}>
                <AuthForm headerText={strings.headerText} submitText={strings.headerText} onSubmitCallback={()=>navigation.navigate('HomeScreen')}/>
                <AuthBottomOptions option1Text={strings.option1Text} option2Text={strings.option2Text}/>
            </View>
        </ImageBackground>
        </View>
    </ScrollView>
  );
};



export default LoginScreen;

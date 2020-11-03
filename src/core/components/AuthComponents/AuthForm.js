/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import {Button,Input} from 'react-native-elements';
import {AuthFormStyles as styles} from './styles';
import {AuthFormStrings as strings} from './static'

const validateEmail=(email)=>{

    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

}


const AuthForm = ({headerText,submitText,onSubmitCallback})=>{

    const [showPass,setShowPass] = useState(false);
    const [valid,setValid] = useState(false);
    return (

        <View style={styles.componentContainer}>
            <Text style={styles.header}>
                Welcome
            </Text>
            <Text style={styles.subHeader}>
                {`${headerText} ${strings.findHome}`}
            </Text>

            <Input
            containerStyle={[styles.container,styles.firstInput]}
            inputContainerStyle={styles.inputContainer}
            autoCapitalize="none"
            placeholder={strings.emailPlaceholder}
            rightIcon={
                valid
                ?<Image style={[styles.userIcon,styles.icon]} source={require('../../resources/UserConfirmIcon.png')}/>
                :null
            }
            inputStyle={styles.input}

            label={<Text style={styles.inputLabel}>Email</Text>}
            onChangeText={(text)=>
                validateEmail(text)?setValid(true):setValid(false)
            }
            />

            <Input
            autoCapitalize="none"
            secureTextEntry={!showPass}
            placeholder={strings.passPlaceHolder}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            rightIcon={
                <TouchableOpacity
                    onPress={()=>{
                        showPass ? setShowPass(false) : setShowPass(true);
                    }}
                >
                    <Image style={[styles.passIcon,styles.icon]} source={require('../../resources/ShowPassIcon.png')}/>
                </TouchableOpacity>
            }
            inputStyle={styles.input}
            label={<Text style={styles.inputLabel}>Password</Text>}
            />
            <Button
                containerStyle={styles.formButtonContainer}
                buttonStyle={styles.formButton}
                title={submitText}
                onPress={onSubmitCallback}
            />
        </View>
    );
};


export default AuthForm;

/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {Input} from 'react-native-elements';
import {HomeSearchStyles as styles} from './styles';
import {SearchStrings as strings} from './static';
import {Filter,Search} from '../../resources'

const HomeSearchBar = () => {

    return (
            <Input
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
            rightIcon={
                <Image
                    style={styles.rightIcon}
                    source={Filter}
                />
            }
            leftIcon={
                <Image
                    style={styles.leftIcon}
                    source={Search}
                />
            }


            placeholder={strings.placeholder}
            placeholderTextColor="rgba(19, 73, 123, 0.6)"
            />

    );
};

export default HomeSearchBar;

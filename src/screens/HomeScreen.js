/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {HomeScreenStyles as styles} from './styles';
import {HomeCategoryList,HomeSearchBar,HomeTopSection,LocationList} from '../core/components/HomeComponents';

const HomeScreen = () =>{

    return (
        <View style={styles.container}>
            <HomeTopSection/>
            <HomeSearchBar/>
            <HomeCategoryList/>
            <LocationList/>
        </View>
    );
};


export default HomeScreen;

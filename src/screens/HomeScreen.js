/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {HomeScreenStyles as styles} from './styles';
import {HomeCategoryList,HomeSearchBar,HomeTopSection,LocationList} from '../core/components/HomeComponents';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () =>{

    return (
        <ScrollView style={styles.container}>
            <HomeTopSection/>
            <HomeSearchBar/>
            <HomeCategoryList/>
            <LocationList/>
        </ScrollView>
    );
};


export default HomeScreen;

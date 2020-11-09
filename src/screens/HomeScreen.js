/* eslint-disable prettier/prettier */
import React from 'react';
import {HomeScreenStyles as styles} from './styles';
import {HomeCategoryList,HomeSearchBar,HomeTopSection,LocationList} from '../core/components/HomeComponents';
import {ScrollView} from 'react-native'
const HomeScreen = ({navigation}) =>{

    return (
        <ScrollView style={styles.container}>
            <HomeTopSection navigation={navigation}/>
            <HomeSearchBar/>
            <HomeCategoryList/>
            <LocationList/>
        </ScrollView>
    );
};


export default HomeScreen;

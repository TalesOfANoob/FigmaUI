/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView,TouchableOpacity,Text, View,Image} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {AccountScreenStyles as styles} from './styles';
import {genStars} from './../core/helpers';
import {CookieMonster} from '../core/resources';
const AccountScreen = ({navigation}) =>{
    const mockData = {
        name:'Cookie Monster',
        stars:'4',
        opinions:'10',
        location:'Los angeles,CA',
        profilePic: CookieMonster,
    };
    return (
        <ScrollView
        style={styles.container}
        >
            <TouchableOpacity
                style={styles.backIconContainer}
                onPress={()=>navigation.goBack()}
           >
                <EntypoIcon style={styles.backIcon} name="chevron-small-left"/>
            </TouchableOpacity>

            <View style={styles.headerContainer}>

                <View style={styles.leftSection}>
                    <Text style={styles.name}>{mockData.name}</Text>
                    <View style={styles.starContainer}>
                        {genStars(5,styles.star,styles.star)}
                        <Text style={styles.opinions} >{`(${mockData.opinions})`}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>{mockData.location}</Text>
                    </View>
                </View>
                <View  style={styles.rightSection}>
                    <Image style={styles.profilePic} source={mockData.profilePic}/>
                </View>
            </View>
        </ScrollView>
    );
};


export default AccountScreen;

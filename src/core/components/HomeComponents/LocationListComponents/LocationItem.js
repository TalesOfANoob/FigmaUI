/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,Image, ImageBackground} from 'react-native';
import {LocationItemStyles as styles} from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemBottomBar from './ItemBottomBar';
const LocationItem = ({img,name,price,owner,stars,reviews,specs,location}) =>{

    return (
        <View style={styles.container}>
            <ImageBackground
                source={img}
                style={styles.backgroundStyle}
            >
            <Text style={styles.locationText}><Ionicons style={styles.locIcon} name="location-outline"/>{location}</Text>
            <ItemBottomBar name={name} price={price} owner={owner} stars={stars} reviews={reviews} specs={specs}/>
            </ImageBackground>
        </View>
    );

};



export default LocationItem;

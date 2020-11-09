/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View,Text, ImageBackground,TouchableOpacity} from 'react-native';
import {LocationItemStyles as styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemBottomBar from './ItemBottomBar';
const LocationItem = ({img,name,price,owner,stars,reviews,specs,location}) =>{

    const [fav,setFav] = useState(false);
    return (
        <View style={styles.container}>
            <ImageBackground
                key={img}
                source={img}
                style={styles.backgroundStyle}
            >
            <Text style={styles.locationText}><Ionicons style={styles.locIcon} name="location-outline"/>{location}</Text>

            <TouchableOpacity
                style={styles.favIconContainer}
                onPress={()=>fav ? setFav(false) : setFav(true)}
            >
                <MaterialCommunityIcon style={[styles.favIcon,fav ? styles.favIconEnabled : styles.favIconDisabled]} name="heart-outline"/>
            </TouchableOpacity>

            <ItemBottomBar key={name + owner + price} name={name} price={price} owner={owner} stars={stars} reviews={reviews} specs={specs}/>
            </ImageBackground>
        </View>
    );

};



export default LocationItem;

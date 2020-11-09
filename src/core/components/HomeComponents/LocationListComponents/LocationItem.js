/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View,Text, ImageBackground,TouchableOpacity} from 'react-native';
import {LocationItemStyles as styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemBottomBar from './ItemBottomBar';
import {useNavigation} from '@react-navigation/native'
const LocationItem = ({img,name,price,owner,stars,reviews,specs,location,favEnabled = true}) =>{

    const [fav,setFav] = useState(false);
    const navigation = useNavigation();
    const jsx=(
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
            {favEnabled
            ? <MaterialCommunityIcon style={[styles.favIcon,fav ? styles.favIconEnabled : styles.favIconDisabled]} name="heart-outline"/>
            : null
        }
        </TouchableOpacity>

        <ItemBottomBar key={name + owner + price} name={name} price={price} owner={owner} stars={stars} reviews={reviews} specs={specs}/>
        </ImageBackground>
    </View>);

    return (
        
        favEnabled
        ?<TouchableOpacity onPress={()=>navigation.navigate('LocationDetailScreen')}>{jsx}</TouchableOpacity>
        :jsx
        
    );

};



export default LocationItem;

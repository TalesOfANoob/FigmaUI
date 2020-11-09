/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {ScrollView,View,Image, ImageBackground,Text,TouchableOpacity} from 'react-native';
import {LocationDetailStyles as styles} from './styles';
import {LocImg} from '../core/resources';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DetailStrings as strings} from './static';
import {CookieMonster} from '../core/resources';
import {Swipeable} from 'react-native-gesture-handler'
const LocationDetailScreen  = ({route,navigation}) =>{
    const {location,name,specs,price} = route.params;
    const [fav,setFav] = useState(false);
    const [selectedCat,setSelected] = useState(0);
    const availability = Math.random();
    return (
    <View style={styles.container}>
        <ScrollView>
            <ImageBackground style={styles.locationImage} source={LocImg}>
                <View style={styles.topButtonContainer}>
                <TouchableOpacity
                    style={styles.backIconContainer}
                    onPress={()=>navigation.goBack()}
            >
                    <EntypoIcon style={styles.backIcon} name="chevron-small-left"/>
                </TouchableOpacity>

                    <Text style={[styles.availability,availability < 0.5 ? styles.unAvailable : styles.available]}>
                        {availability < 0.5 ? strings.unAvailable : strings.available}
                    </Text>

                    <TouchableOpacity
                        style={styles.favIconContainer}
                        onPress={()=>fav ? setFav(false) : setFav(true)}
                    >
                        <MaterialCommunityIcon style={[styles.favIcon,fav ? styles.favIconEnabled : styles.favIconDisabled]} name="heart-outline"/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.locationInfo}>
                <View style={styles.infoHeader}>

                    <View style={styles.infoHeaderText}>

                        <View style={styles.locationTextContainer}>
                            <Ionicons style={styles.locationIcon} name="location-outline"/><Text style={styles.locationText}>{location}</Text>
                        </View>

                        <Text style={styles.name}>
                            {name}
                        </Text>
                    </View>

                    <Image style={styles.infoHeaderPic} source={CookieMonster}/>

                </View>
                <View style={styles.facilities}>

                    <Text style={styles.facilityText}>
                        {strings.wifi}
                    </Text>

                    <EntypoIcon style={styles.dot} name="dot-single"/>

                    <Text style={styles.facilityText}>
                        {strings.desk}
                    </Text>

                    <EntypoIcon style={styles.dot} name="dot-single"/>

                    <Text style={styles.facilityText}>
                        {strings.safe}
                    </Text>

                </View>
                <View style={styles.specsContainer}>

                    <View style={styles.specContainer}>
                        <Ionicons style={styles.specIcon} name="bed-outline"/>
                        <Text style={styles.specText}>{specs[0]}</Text>
                    </View>

                    <View style={styles.specContainer}>
                        <MaterialCommunityIcon style={styles.specIcon} name="shower"/>
                        <Text style={styles.specText}>{specs[1]}</Text>
                    </View>

                    <View style={styles.specContainer}>
                        <MaterialCommunityIcon style={styles.specIcon} name="fridge-outline"/>
                        <Text style={styles.specText}>{specs[2]}</Text>
                    </View>

                </View>

                <View style={styles.categoriesContainer}>

                    <TouchableOpacity style={styles.categoryContainer}
                        onPress={()=>setSelected(0)}
                    >
                        <Ionicons style={[styles.categoryIcon,selectedCat === 0 ? styles.selectedCategory : null]} name="information-circle-outline"/>
                        <Text style={[styles.categoryText,selectedCat === 0 ? styles.selectedCategory : null]}>{strings.info}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer}
                        onPress={()=>setSelected(1)}
                    >
                        <MaterialCommunityIcon style={[styles.categoryIcon,selectedCat === 1 ? styles.selectedCategory : null]} name="comment-text-outline"/>
                        <Text style={[styles.categoryText,selectedCat === 1 ? styles.selectedCategory : null]}>{strings.comms}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer}
                        onPress={()=>setSelected(2)}
                    >
                        <MaterialCommunityIcon style={[styles.categoryIcon,selectedCat === 2 ? styles.selectedCategory : null]} name="percent-outline"/>
                        <Text style={[styles.categoryText,selectedCat === 2 ? styles.selectedCategory : null]}>{strings.offers}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryContainer}
                        onPress={()=>setSelected(3)}
                    >
                        <Ionicons style={[styles.categoryIcon,selectedCat === 3 ? styles.selectedCategory : null]} name="share-social-outline"/>
                        <Text style={[styles.categoryText,selectedCat === 3 ? styles.selectedCategory : null]}>{strings.shared}</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.descriptionHeader}>{strings.descriptionHeader}</Text>
                <Text style={styles.descriptionText}>{strings.descriptionText}</Text>
            </View>
        </ScrollView>
        <View style={styles.reserveContainer}>

            <Text style={styles.price}>
                ${price} USD
            </Text>

            <TouchableOpacity>
                <Text style={styles.reserveButton}>
                    {strings.reserve}
                </Text>
            </TouchableOpacity>

        </View>
    </View>
    );
};


export default LocationDetailScreen;

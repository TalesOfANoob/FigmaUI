/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,Image} from 'react-native';
import {ItemBottomBarStyles as styles} from './styles';

import {

    CookieMonster,
    Dorm,
    Bath,
    Kitchen,

} from '../../../resources';
import {genStars} from '../../../helpers'
const ItemBottomBar = ({name,owner,stars,reviews,price,specs})=>{

    return (
        <View style={styles.container} >
            <><Text style={styles.name}>{name}</Text></>
            <View style={styles.sectionContainer}>
                <View style={styles.rightSection}>
                    <View style={styles.ownerContainer}>
                        <Image
                            source={CookieMonster}
                            style={styles.profilePic}
                            />
                        <Text style={styles.owner}>{owner}</Text>

                    </View>
                    <View style={styles.reviewContainer}>
                        <View style={styles.starsContainer}>
                            {
                                genStars(stars,styles.star,styles.star)
                            }
                        </View>
                        <Text style={styles.reviews}>{`${reviews} opinions`}</Text>
                    </View>
                </View>

                <View style={styles.leftSection} >

                    <Text style={styles.price}>
                        {`$${price} USD`}
                    </Text>

                    <View style={styles.specsContainer}>
                        <View style={styles.specContainer}>
                            <Image style={styles.specIcon} source={Dorm}/>
                            <Text style={styles.specText}>{specs[0]}</Text>
                        </View>

                        <View style={styles.specContainer}>
                            <Image style={styles.specIcon} source={Bath}/>
                            <Text style={styles.specText}>{specs[1]}</Text>
                        </View>

                        <View style={styles.specContainer}>
                            <Image style={styles.specIcon} source={Kitchen}/>
                            <Text style={styles.specText}>{specs[2]}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ItemBottomBar;

/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,Image} from 'react-native';
import {ItemBottomBarStyles as styles} from './styles';


const genStars = (stars)=>{

    let jsx = [];
    for (let i = 0; i < 5; i++){

        if (i < stars){
            jsx.push(<Image style={styles.star} source={require('../../../resources/BlueStar.png')}/>);
        } else {
            jsx.push(<Image style={styles.star} source={require('../../../resources/Star.png')}/>);
        }
    }
    return jsx;
};

const ItemBottomBar = ({name,owner,stars,reviews,price,specs})=>{

    return (
        <View style={styles.container}>
            <View style={styles.rightSection}>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.ownerContainer}>
                    <Image
                        source={require('../../../resources/CookieMonster.jpg')}
                        style={styles.profilePic}
                        />
                    <Text style={styles.owner}>{owner}</Text>

                </View>
                <View style={styles.reviewContainer}>
                    <View style={styles.starsContainer}>
                        {
                            genStars(stars)
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
                        <Image style={styles.specIcon} source={require('../../../resources/Dorm.png')}/>
                        <Text>{specs[0]}</Text>
                    </View>

                    <View style={styles.specContainer}>
                        <Image style={styles.specIcon} source={require('../../../resources/Bath.png')}/>
                        <Text>{specs[1]}</Text>
                    </View>

                    <View style={styles.specContainer}>
                        <Image style={styles.specIcon} source={require('../../../resources/Kitchen.png')}/>
                        <Text>{specs[2]}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ItemBottomBar;

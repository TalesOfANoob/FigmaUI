/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {TopSectioStyles as styles} from './styles';
import {TopSectionStrings as strings} from './static';
import {CookieMonster} from '../../resources'
const HomeTopSection = ({navigation}) => {

    return (
        <View>
            <View style={styles.topBar}>

                    <Image
                    source={CookieMonster}
                    style={styles.profilePic}
                    />
                    <View style={styles.location}>
                        <Ionicons
                        name="location-outline"
                        style={styles.icon}
                        />
                        <Text style={styles.locationText}>{strings.locationString}</Text>
                        <Entypo
                        name="chevron-down"
                        style={styles.icon}
                        />
                    </View>
                    <Fontisto
                        name="bell"
                        style={styles.icon}
                    />
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('AccountScreen')}
                    >
                        <AntDesign
                            name="setting"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
            </View>

            <Text style={styles.hello}>{strings.helloString}</Text>
            <Text style={styles.look}>{strings.lookText}</Text>

        </View>
    );
};

export default HomeTopSection;

/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View,TouchableOpacity} from 'react-native';
import {TabBarStyles as styles} from './styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
const CustomTabBar = () => {
    const [selected,setSelected] = useState(0);
    return <View style={styles.container}>
        <TouchableOpacity
            onPress={()=>{
                setSelected(0);
            }}
        >
            <MaterialCommunityIcon style={selected === 0 ? styles.iconSelected : styles.icon} name="home-search-outline"/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
            setSelected(1);
        }}
        >
            <MaterialCommunityIcon style={selected === 1 ? styles.iconSelected : styles.icon} name="heart-outline"/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
            setSelected(2);
        }}
        >
            <SimpleIcon style={selected === 2 ? styles.iconSelected : styles.icon} name="location-pin"/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{
            setSelected(3);
        }}
        >
            <IonIcon style={selected === 3 ? styles.iconSelected : styles.icon} name="chatbubble-ellipses-outline"/>
        </TouchableOpacity>
  </View>;
};

export default CustomTabBar;

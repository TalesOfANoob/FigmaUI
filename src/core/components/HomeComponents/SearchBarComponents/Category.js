/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {CategoryStyles as styles} from './styles';
const Category = ({img,title,selected = false})=>{

    return (<View style={[selected ? styles.selectedContainer : styles.container,styles.defaultContainer]}>
            <Image
                style={selected?styles.imageSelected:styles.image}
                source={img}
            />
            {selected ? <Text style={styles.title}>{title}</Text> : null}
        </View>);

};

export default Category;

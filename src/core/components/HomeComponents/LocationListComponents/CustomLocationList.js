/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import LocationItem from './LocationItem';
const renderItem = (data)=>{

    const jsx = [];
    for (let i = 0; i < data.length; i++){
        const item = data[i];
        jsx.push(<LocationItem
            img={item.img}
            name={item.name}
            price={item.price}
            owner={item.owner}
            stars={item.stars}
            reviews={item.reviews}
            specs={item.specs}
            location={item.location}
        />);
    }
    return jsx;
};
const CustomLocationList = ({data,style})=>{

    return (
        <View style={style}>
            {renderItem(data)}
        </View>

    );

};



export default CustomLocationList;

/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import LocationItem from './LocationItem';
const renderItem = (data,favEnabled)=>{

    const jsx = [];
    for (let i = 0; i < data.length; i++){
        const item = data[i];
        jsx.push(<LocationItem
            key={item.owner + item.reviews + item.specs + item.price}
            img={item.img}
            name={item.name}
            price={item.price}
            owner={item.owner}
            stars={item.stars}
            reviews={item.reviews}
            specs={item.specs}
            location={item.location}
            favEnabled={favEnabled}
        />);
    }
    return jsx;
};
const CustomLocationList = ({data,style,favEnabled = true})=>{

    return (
        <View style={style}>
            {renderItem(data,favEnabled)}
        </View>

    );

};



export default CustomLocationList;

/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList} from 'react-native';
import {LocationItem} from './LocationListComponents';
import {LocationListStyles as styles} from './styles';
const LocationList = () => {


    const data = [
        {
            img:require('../../resources/LocImg.jpg'),
            name:'location1',
            price:1234,
            owner:'Cookie Monster',
            stars:4,
            reviews:20,
            specs:[1,2,3],
            location:'Los Angeles, CA',
        },
        {
            img:require('../../resources/LocImg.jpg'),
            name:'location2',
            price:4321,
            owner:'Cookie Monster',
            stars:3,
            reviews:10,
            specs:[3,2,1],
            location:'Los Angeles, CA',
        },
    ];

    return (

        <FlatList
            style={styles.list}
            data={data}
            keyExtractor={(item,index)=>index}
            renderItem={({item})=>{
                return (<LocationItem
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    owner={item.owner}
                    stars={item.stars}
                    reviews={item.reviews}
                    specs={item.specs}
                    location={item.location}
                />);
            }}
        />
    );
};

export default LocationList;

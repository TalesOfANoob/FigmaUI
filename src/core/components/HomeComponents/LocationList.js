/* eslint-disable prettier/prettier */
import React from 'react';
import {LocationListStyles as styles} from './styles';
import {CustomLocationList} from './LocationListComponents';
import {LocImg} from '../../resources';
const LocationList = () => {


    const data = [
        {
            img:LocImg,
            name:'location1',
            price:1234,
            owner:'Cookie Monster',
            stars:4,
            reviews:20,
            specs:[1,2,3],
            location:'Los Angeles, CA',
        },
        {
            img:LocImg,
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
            <CustomLocationList data={data} style={styles.list}/>

    );
};

export default LocationList;

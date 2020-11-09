/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {BlueStar,Star} from '../resources';
export const genStars = (stars,style1,style2)=>{

    let jsx = [];
    for (let i = 0; i < 5; i++){

        if (i < stars){
            jsx.push(<Image key={i} style={style1} source={BlueStar}/>);
        } else {
            jsx.push(<Image key={i} style={style2} source={Star}/>);
        }
    }
    return jsx;
};

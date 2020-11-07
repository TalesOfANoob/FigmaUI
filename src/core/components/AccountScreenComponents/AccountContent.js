/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView} from 'react-native';
import {AccountContentStyle as styles} from './styles';
import strings from './static/strings';
import Svg,{Text as SvgText,Circle} from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
const AccountContent = () => {

    const size = 65;
    const strokeWidth = 15;
    const radius = size - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    const mockData = {
        estadistics:{
            level:30,
            sales:10,
            client:9,

        },
    };
    const [level,setLevel] = useState(0);
    useEffect(()=>{
        setInterval(() => {

            setLevel(l=>l < 100 ? l + 0.5 : 0);

        }, 10);
    },[]);

    const fillLevel = ( level * circumference) / 100;

    return (
    <View style={styles.container}>
        <Text style={styles.goldHeader}>
            {strings.findHome}
        </Text>
        <ScrollView

            style={styles.statsList}
         >
            <View >
                <Text
                    style={styles.estatistics}>
                    {strings.estadistics}
                </Text>

                <Svg style={{width:size * 2,height:size * 2}}>

                    <Circle
                        stroke="#e3e3e3"
                        fill="none"
                        r={radius}
                        cx={size}
                        cy={size}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference}`}
                    />
                    <Circle

                        stroke="#46D0D9"
                        fill="none"
                        r={radius}
                        cx={size}
                        cy={size}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${fillLevel} ${circumference - fillLevel}`}
                        strokeDashoffset={circumference / 6}

                    />

                </Svg>



            </View>
         </ScrollView>
    </View>);
};

export default AccountContent;

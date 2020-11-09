/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView} from 'react-native';
import {AccountContentStyle as styles} from './styles';
import strings from './static/strings';
import Svg,{Text as SvgText,Circle} from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';
const AccountContent = () => {

    const size = 45;
    const strokeWidth = 12;
    const radius = size - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    const mockData = {
        estadistics:{
            level:30,
            sales:10,
            client:9,

        },
    };
    /*const [level,setLevel] = useState(0);
    useEffect(()=>{
        setInterval(() => {

            setLevel(l=>l < 100 ? l + 0.5 : 0);

        }, 10);
    },[]);
    //Animated.timing(setLevel(l=>l < 100 ? l + 0.5 : 0))*/
    const fillLevel = ( mockData.estadistics.level * circumference) / 100;

    return (
    <View style={styles.container}>
        <Text style={styles.goldHeader}>
            {strings.findHome}
        </Text>
        <ScrollView

            style={styles.statsList}
         >
            <View style={styles.statsContainer}>
                <Text
                    style={styles.estatisticsTitle}>
                    {strings.estadistics}
                </Text>
                <View style={styles.statsBottomContainer}>
                    <View style={styles.levelContainer}>

                        <Text style={styles.level}>
                            {mockData.estadistics.level}
                        </Text>

                        <Svg>
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
                                cx={RFValue(size)}
                                cy={size}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${fillLevel} ${circumference - fillLevel}`}
                                strokeDashoffset={circumference / 6}

                            />
                        </Svg>
                    </View>
                    <View style={styles.estTextContainer}>
                        <Text>
                            {mockData.estadistics.client}
                        </Text>
                        <Text>
                            {mockData.estadistics.client}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text>View more info</Text>
                </View>
        </View>
    </ScrollView>
</View>);
};

export default AccountContent;

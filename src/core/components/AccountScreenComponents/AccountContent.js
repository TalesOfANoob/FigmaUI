/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {AccountContentStyle as styles} from './styles';
import strings from './static/strings';
import Svg,{Circle} from 'react-native-svg';

const AccountContent = () => {

    const size = 50;
    const strokeWidth = 12;
    const radius = size - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    const mockData = {
        estadistics:{
            level:60,
            sales:10,
            client:9,

        },
    };
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
                    style={styles.estatisticsHeader}>
                    {strings.estadistics}
                </Text>
                <View style={styles.estatisticsMiddleSection}>
                    <View style={styles.estatisticsLevelContainer}>
                        <View style={styles.estatisticsLevelTextContainer}>
                            <Text style={styles.estatisticsLevelText}>
                                {mockData.estadistics.level}
                            </Text>
                            <Text>{strings.level}</Text>
                        </View>
                        <Svg style={styles.levelCircle}>

                            <Circle
                                stroke="#e3e3e3"
                                fill="none"
                                r={radius}
                                cx={56}
                                cy={48}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${circumference}`}
                            />
                            <Circle

                                stroke="#46D0D9"
                                fill="none"
                                r={radius}
                                cx={56}
                                cy={48}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${fillLevel} ${circumference - fillLevel}`}
                                strokeDashoffset={circumference / 6}

                            />

                        </Svg>

                    </View>

                    <View style={styles.estatisticsTextContainer}>
                        <Text>a</Text>
                        <Text>b</Text>
                    </View>

                </View>
                <Text style={styles.estatisticsFooter}>
                    asd
                    
                </Text>
            </View>
         </ScrollView>
    </View>);
};

export default AccountContent;

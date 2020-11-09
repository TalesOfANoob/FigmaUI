/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {AccountContentStyle as styles} from './styles';
import strings from './static/strings';
import Svg,{Circle} from 'react-native-svg';
import colors from '../../themes/colors';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {LocImg} from '../../resources/index';
import { CustomLocationList} from '../HomeComponents/LocationListComponents'
const AccountContent = () => {

    const size = 40;
    const strokeWidth = 11;
    const radius = size - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    const mockData = {
        estadistics:{
            level:60,
            sales:10,
            client:9,

        },
        locations:[{

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
        }],
    };
    const fillLevel = ( mockData.estadistics.level * circumference) / 100;

    return (
    <View style={styles.container}>
        <Text style={styles.goldHeader}>
            {strings.findHome}
        </Text>
        <ScrollView
            horizontal
            style={styles.statsList}
         >
            <View style={styles.statsContainer}>
                <Text
                    style={styles.statsHeader}>
                    {strings.estadistics}
                </Text>
                <View style={styles.estatisticsMiddleSection}>
                    <View style={styles.estatisticsLevelContainer}>
                        <View style={styles.estatisticsLevelTextContainer}>
                            <Text style={styles.estatisticsLevelText}>
                                {mockData.estadistics.level}
                            </Text>
                            <Text style={styles.estatisticsLevelSubText}>{strings.level}</Text>
                        </View>
                        <Svg>

                            <Circle
                                stroke={colors.strokeEmpty}
                                fill="none"
                                r={radius}
                                cx={57}
                                cy={42}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${circumference}`}
                            />
                            <Circle

                                stroke={colors.stroke}
                                fill="none"
                                r={radius}
                                cx={57}
                                cy={42}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${fillLevel} ${circumference - fillLevel}`}
                                strokeDashoffset={circumference / 6}

                            />

                        </Svg>

                    </View>

                    <View style={styles.estatisticsTextContainer}>

                        <View style={styles.estatisticsTextSubContainer}>
                            <FoundationIcon style={styles.estatisticsSaleIcon} name="dollar"/>
                            <Text style={styles.estatisticsText}>
                                {mockData.estadistics.sales} {strings.sales}
                            </Text>
                        </View>

                        <View style={styles.estatisticsTextSubContainer}>
                            <MaterialIcon style={styles.estatisticsClientIcon} name="person-outline" />
                            <Text style={styles.estatisticsText}>
                                {mockData.estadistics.client < 10 ? 0 : null}{mockData.estadistics.client} {strings.clients}
                            </Text>
                        </View>

                    </View>

                </View>
                <Text style={styles.estatisticsFooter}>
                    {strings.moreInfo}
                </Text>
            </View>
            <View style={styles.statsContainer}>
                <Text style={styles.statsHeader}>{strings.info}</Text>
                <Text style={styles.infoText}>{strings.infoText}</Text>
            </View>
        </ScrollView>
        <Text style={styles.goldHeader}>{strings.post}</Text>
        <CustomLocationList data={mockData.locations} style={{}} favEnabled={false}/>
    </View>);
};

export default AccountContent;

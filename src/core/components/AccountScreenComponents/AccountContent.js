/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {AccountContentStyle as styles} from './styles';
import strings from './static/strings';
import {Svg,Text as SvgText} from 'react-native-svg';
const AccountContent = () => {
    const mockData = {
        estadistics:{
            level:30,
            sales:10,
            client:9,

        },
    };
    return (
    <View style={styles.container}>
        <Text style={styles.goldHeader}>
            {strings.findHome}
        </Text>
        <ScrollView
            style={styles.statsList}
         >
            <View>
                <Text style={styles.estatistics}>{strings.estadistics}</Text>
                <Svg>
                    <SvgText
                    >
                    {mockData.estadistics.level}
                    </SvgText>
                </Svg>
                
                
                 
            </View>
         </ScrollView>
    </View>);
};

export default AccountContent;

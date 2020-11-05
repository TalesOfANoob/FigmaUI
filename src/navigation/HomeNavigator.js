/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import roots from './roots';
import HomeScreen from '../screens/HomeScreen';
import CustomTabBar from './components/CustomTabBar';
const defaultNavigationOptions = () => ({
    gestureEnabled: false,
    headerShown: false,
  });
const Tabs = createBottomTabNavigator();
const HomeNavigator = ()=>(


        <Tabs.Navigator
        screenOptions={defaultNavigationOptions}
        initialRouteName={roots.homeScreen}
        tabBar={props=><CustomTabBar {...props}/>}
        >
            <Tabs.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.homeScreen}
                component={HomeScreen}
            />
            <Tabs.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.homeScreen + '1'}
                component={HomeScreen}
            />
            <Tabs.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.homeScreen + '2'}
                component={HomeScreen}
            />
            <Tabs.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.homeScreen + '3'}
                component={HomeScreen}
            />
        </Tabs.Navigator>

);

export default HomeNavigator;

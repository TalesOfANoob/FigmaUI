/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import roots from './roots';
import LoginScreen from '../screens/LoginScreen';
import HomeNavigator from './HomeNavigator';
import AccountScreen from '../screens/AccountScreen';
import LocationDetailScreen from '../screens/LocationDetailScreen';
const defaultNavigationOptions = () => ({
    gestureEnabled: false,
    headerShown: false,
  });
const Stack = createStackNavigator();
const MainStackNavigator = ()=>(

    <NavigationContainer>
        <Stack.Navigator
            screenOptions={defaultNavigationOptions}
            initialRouteName={roots.loginScreen}
        >
            <Stack.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.loginScreen}
                component={LoginScreen}

            />
            <Stack.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.homeScreen}
                component={HomeNavigator}
            />
            <Stack.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.accountScreen}
                component={AccountScreen}
            />
            <Stack.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.locationDetailScreen}
                component={LocationDetailScreen}
            />

        </Stack.Navigator>
    </NavigationContainer>

);

export default MainStackNavigator;

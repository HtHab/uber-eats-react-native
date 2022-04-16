import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

export default function RootNavigation(props) {

    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={screenOptions} >
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

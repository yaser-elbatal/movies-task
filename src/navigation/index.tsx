import React from 'react'
import { StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { MovieDetailes, MoviesList } from '@screens';
import { navigationRef } from './routes-navigation/NavigationHelper';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
const config: any = {
    animation: "timing",
    config: {
        duration: 120,
    },
};

const options: StackNavigationOptions = {
    headerShown: false,
    transitionSpec: {
        open: config,
        close: config,
    },
};


export const MainRoutes = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="MoviesList"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                }}
            >
                <Stack.Screen name="MoviesList" component={MoviesList} options={options} />
                <Stack.Screen name="MovieDetailes" component={MovieDetailes} options={options} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}



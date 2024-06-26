import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

export default FeedNavigator = ()=> (
    <Stack.Navigator 
    screenOptions={{ presentation: 'modal', gestureEnabled: true }} >
        <Stack.Screen name="Listings" component={ListingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}
         options={{ headerShown: false }} />
    </Stack.Navigator>
)

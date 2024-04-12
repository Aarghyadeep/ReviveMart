import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

export default AppNavigator = ()=> (
   <Tab.Navigator screenOptions={{ tabBarStyle: {  height: '6%', paddingBottom: 10 } }}>
    <Tab.Screen name="Feed" component={FeedNavigator}
    options={{ headerShown: false, 
      tabBarIcon: ({ color, size }) => 
      <MaterialCommunityIcons name="home" size={size} color={color} />
    }} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} 
    options={ ({ navigation })=> ({ headerShown: false,
      tabBarButton: ()=> <NewListingButton onPress={()=> navigation.navigate("ListingEdit")} />
    })} />
    <Tab.Screen name="Accounts" component={AccountNavigator} options={{ headerShown: false, 
      tabBarIcon: ({ color, size }) => 
      <MaterialCommunityIcons name="account" size={size} color={color} />
    }} />
   </Tab.Navigator>
);
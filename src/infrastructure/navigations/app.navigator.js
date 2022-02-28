import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import { HomeScreen } from "../../features/Home/screens/home.screen";
import { CartScreen } from "../../features/Cart/screens/cart.screen";

const Tab = createBottomTabNavigator();



export const AppNavigator = () => {
 return(
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#befc2d',
        tabBarInactiveTintColor: 'gray',
      }}
      >
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false,
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }}/>
    <Tab.Screen name="Cart" component={CartScreen}  options={{headerShown: false,
     tabBarLabel: 'Cart',
     tabBarIcon: ({ color, size }) => (
       <MaterialCommunityIcons name="cart" color={color} size={size} />
     ),
    }} />
  </Tab.Navigator> 
 );
};
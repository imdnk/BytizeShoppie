import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Assets, View, Icon, Slider, Switch, GradientSlider} from 'react-native-ui-lib';

import { HomeScreen } from "../../features/Home/screens/home.screen";
import { CartScreen } from "../../features/Cart/screens/cart.screen";

const Tab = createBottomTabNavigator();



export const AppNavigator = () => {
 return(
      <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
    <Tab.Screen name="Cart" component={CartScreen}  options={{headerShown: false }} />
  </Tab.Navigator>
  
    
 );
};
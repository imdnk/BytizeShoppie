import React from "react";
import { Text, View,SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { CartCard } from "../../../components/card.component";
import { Mocks } from "../../../services/index";
import { style } from "../../../components/style";

export const HomeScreen = ({navigation}) => {
  
  return(
  <SafeAreaView style ={style.SafeArea}>
      <Text>
      Home Screen here.....
      </Text>
      <ScrollView>
        {Mocks.map((item) => { 
          
          return (<CartCard item ={item} />);})}
      </ScrollView>  
  </SafeAreaView>
  );
};

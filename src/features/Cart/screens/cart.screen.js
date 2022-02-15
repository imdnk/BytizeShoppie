import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import {CompactCard} from '../components/compact-card'

import { Mocks } from "../../../services/index";
import {  style } from '../../../components/style';




export const CartScreen = () => {
 
  const CartList = () =>{
   
    return(
      <ScrollView>
      {Mocks.map((item) => {
      if(item.quantity)
      {
          <SafeAreaView style = {style.SafeArea}>
              <Text> No Items added</Text>
          </SafeAreaView>
      }
       return (<CompactCard item ={item} />);
    })}
    </ScrollView>
    ); 
  }
  return(
  <SafeAreaView style = {style.SafeArea}>
    <Text>    
      Cart Screen here.....
    </Text>
       <CartList /> 
  </SafeAreaView> )
};

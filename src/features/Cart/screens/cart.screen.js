import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import {CompactCard} from '../components/compact-card'

import { Mocks } from "../../../services/index";
import {  style } from '../../../components/style';
import { FavouriteContext } from "../../../services/Favourites";

export const CartScreen = () => {

  const {favourites} = useContext(FavouriteContext);

  const CartList = () =>{
    return(
      <View>
            <ScrollView>
          {favourites.map((item) => {
           return (<CompactCard item ={item} />);
        })}
        </ScrollView>
      </View>   
    ); 
  }

  if(favourites.length)
  {
    return(
      <SafeAreaView style = {style.SafeArea}>
        <Text>    
          Cart Screen here.....
        </Text>
           <CartList /> 
      </SafeAreaView> )
  }
  else{
    return(
      <SafeAreaView style = {style.SafeArea}>
      <Text> No Cart items</Text>
      </SafeAreaView>
    );
  }
  
};

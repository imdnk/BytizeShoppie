import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import {CompactCard} from '../components/compact-card';
import styled from "styled-components";
import LottieView from 'lottie-react-native';

import { Mocks } from "../../../services/index";
import {  style } from '../../../components/style';
import { FavouriteContext } from "../../../services/Favourites";

const Safe = styled.SafeAreaView`
flex:1;
align-items: center;
align-content: center;
justifyContent:center;
;`;

const Bigfont = styled.Text`
font-size: 20px;
`;

export const AnimationWrapper = styled(View)`
width: 100%;
height: 30%;
top: 150px;
position: absolute;
padding: 10px;
`;

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
           <CartList /> 
      </SafeAreaView> )
  }
  else{
    return(
      <Safe>
        <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../components/watermelon.json")}
        />
        </AnimationWrapper>
      <Bigfont> Your cart is empty </Bigfont>
      </Safe>
    );
  }
  
};

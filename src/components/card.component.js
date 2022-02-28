import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import { Card, Button, Paragraph, Avatar} from "react-native-paper";
import styled from 'styled-components'

import { QuantityBar } from "./quantitybar";
import { style} from "./style";

const Cardtitle = styled(Card.Title)`
font-family: serif;
font-size: 15px;
`;
const Price = styled(Text)`
paddingTop: 15px;
font-family: serif;
font-size: 15px;
`;



export const CartCard = ({item}) => {
       const [value, setValue] = useState(item.quantity);
       const [isToggled, setIsToggled] = useState(false);
       
       useEffect(() => {
         item.quantity = value;
       },[value])
      
  return( 
    <View style = {{ paddingTop: 12,paddingLeft: 10, paddingRight:10, }}>     
    <Card onPress={() => {setIsToggled(!isToggled)}}>
    <Cardtitle title={item.name} />
    <Card.Cover source={{ uri :item.img_url }} style= {{ padding: 10}}/>
    <Card.Content>
      <Price>Prize: {item.price}</Price>
     </Card.Content>
     </Card>
     {isToggled && <QuantityBar item = {item} value = {value} setValue = {setValue}/>}
    </View>
       );
    
};

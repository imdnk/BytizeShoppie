import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import { Card, Button, Title, Paragraph, Avatar} from "react-native-paper";

import { QuantityBar } from "./quantitybar";


export const CartCard = ({item}) => {
       const [value, setValue] = useState(item.quantity);
       const [isToggled, setIsToggled] = useState(false);
       
       useEffect(() => {
         item.quantity = value;
       },[value])
      
  return( 
    <View style = {{ padding: 12,}}>
           <Card onPress={() => {setIsToggled(!isToggled)}}>
    <Card.Title title={item.name} />
    <Card.Cover source={{ uri :item.img_url }} />
    <Card.Content>
      <Text>Prize:{item.price}</Text>
     </Card.Content>
     </Card>
     {isToggled && <QuantityBar item = {item} value = {value} setValue = {setValue}/>}
    </View>
       );
    
};

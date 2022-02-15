import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import { Card, Button, Title, Paragraph, Avatar} from "react-native-paper";

import { QuantityBar } from "./quantitybar";


export const CartCard = ({item}) => {
       const {
              id = 1,
              name= "Product 1",
              img_url= "https://cdn.imgbin.com/8/18/5/imgbin-chocolate-bar-cadbury-dairy-milk-candy-chocolate-5aQ3ipqSJhKd1T712W1DwwH4G.jpg",
              price = 100,
              quantity= 0,
              } = item;
       const [isToggled, setIsToggled] = useState(false);
  return( 
    <View style = {{ padding: 12,}}>
           <Card onPress={() => {setIsToggled(!isToggled)}}>
    <Card.Title title={item.name} />
    <Card.Cover source={{ uri :item.img_url }} />
    <Card.Content>
      <Text>Prize:{item.price}</Text>
     </Card.Content>
     </Card>
     {isToggled && <QuantityBar item = {item}/>}
    </View>
       );
    
};

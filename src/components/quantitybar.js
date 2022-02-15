import react, { useState, useContext, useEffect } from "react";
import { Text,View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const StepBar = ({item}) => {
  return(
    <View style = {{flexDirection: "row", justifyContent: "center"
}}>
<Button onPress={() => {item.quantity = item.quantity+1}}>+</Button>
<TextInput style ={{ height: 25}} value = {JSON.stringify(item.quantity)} onChange = {(data) =>{ setQuantity(parseInt(data))}}></TextInput>
<Button  onPress={() => {item.quantity = item.quantity-1}}>-</Button>
<Button  onPress={() => {item.quantity = item.quantity}}>Add to Cart</Button>
</View>
  )
}

export const QuantityBar = ({item}) =>{

    useEffect(() => {
        console.log("working")
    },[item.quantity])

    const setQuantity = (data) => {
        item.quantity = data;
    }
    console.log(item.name);
    console.log(item.quantity);
    return(<StepBar item = {item} />);
};
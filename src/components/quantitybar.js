import react, { useState, useContext, useEffect } from "react";
import { Text,View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { FavouriteContext} from "../services/Favourites";

export const QuantityBar = ({item,value, setValue}) => {

  const {add} = useContext(FavouriteContext);

  const inc = () => {
      setValue(++value)
  }

  const dec = () => {
    if(value > 0)
    {
      setValue(--value)
    }  
    else{
      setValue(0)
    }
}
  const setData = ({data}) => {
    setValue(data)
  }

  return(<View style = {{flexDirection: "row", justifyContent: "center"
}}>
<Button onPress={inc}>+</Button>
<TextInput style ={{ height: 25}} value = {JSON.stringify(value)} onChange = {(data) =>{ setData(data)}}></TextInput>
<Button  onPress={dec}>-</Button>
<Button  onPress={() => {add(item)}}>Add to Cart</Button>
</View>);
 };
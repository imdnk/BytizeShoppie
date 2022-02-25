import react, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Card, Button} from "react-native-paper";

import { style } from "../../../components/style";
import { FavouriteContext } from "../../../services/Favourites";

export const CompactCard = ({item}) => {
    const [val, setVal] = useState(item.quantity);
    const { remove } = useContext(FavouriteContext);
    return(
        <View   style = {{ padding: 12,}}>
         <Card>
           <Card.Title title={item.name} />
            <Card.Content>
                <Text>{val}</Text>
            </Card.Content>
            <Button onPress={() => {remove(item)}}>Remove</Button>
        </Card>
        </View>
    );
}
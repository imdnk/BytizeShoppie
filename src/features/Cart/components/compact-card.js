import react, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image} from "react-native";
import { Card, Button} from "react-native-paper";
import styled from 'styled-components';

import { style } from "../../../components/style";
import { FavouriteContext } from "../../../services/Favourites";
import { QuantityBar } from "../../../components/quantitybar";

const CardView = styled(View)`
padding: 10px;
flex-direction: row;
`;

export const CompactCard = ({item}) => {
    const [val, setVal] = useState(item.quantity);
    const { remove } = useContext(FavouriteContext);
    return(
        <View   style = {{ padding: 12,}}>
         <Card>
           <Card.Title title={item.name} />
           <CardView>
           <Card.Cover source={{ uri :item.img_url }} style= {{ height: 50, width: 100}}/>
            <Card.Content>
                <Text>Quantity: {val}</Text>
                <Text>Total prize: {val*item.price}</Text>
            </Card.Content>
           </CardView>
            <Button onPress={() => {remove(item)}}>Remove</Button>
        </Card>
        </View>
    );
}
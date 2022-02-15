import react from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Card, Button} from "react-native-paper";

import { style } from "../../../components/style";

export const CompactCard = ({item}) => {

    return(
        <View   style = {{ padding: 12,}}>
         <Card>
           <Card.Title title={item.name} />
            <Card.Content>
                <Text>{item.quantity}</Text>
            </Card.Content>
            <Button onPress={() => {item.quantity == 0}}>Remove</Button>
        </Card>
        </View>
    );
}
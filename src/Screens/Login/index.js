import React from "react";
import {View, Text, Button} from "react-native";
import styles from "./styles";

export default props => {
    <View style={styles.container}>
        <Text style={styles.text}>Login Page</Text>
        <Button title="Entrarrr" onPress={() => props.navigation.navigate('Home')}/>
    </View>
}

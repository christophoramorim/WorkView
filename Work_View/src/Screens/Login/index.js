import React from "react";
import { View, Text, Button } from "react-native";
import Styles from "./styles";


export default props => (
    <View style= {Styles.container}>
    <Text style = {Styles.text} Home screen/>  
    <Button title="Fazer login" onPress={()=> props.navigation.navigate('Home')}/>
    </View>
)


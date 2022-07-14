import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#d3d3d3'
    },
    text:{

    }
} )
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Header = ()=>{

    return (
        <View style={ styles.container }> 
            <Text style={ styles.title }>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#dce'
    },
    title:{
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    }
});
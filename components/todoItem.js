import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default TodoItem = ({ item }) => {

    return(
        <TouchableOpacity>
            <Text style={ styles.item }>{ item.title }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        width: '100%',
        borderWidth: 2,
        borderColor: '#dce',
        borderRadius: 20,
        paddingVertical: 20,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 15,
    }
});
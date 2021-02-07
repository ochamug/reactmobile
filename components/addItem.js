import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Text } from 'react-native';

export default AddItem = ()=>{
    const [title, setTitle] = useState('');

    const changeHandler = (val)=>{
        setTitle(val);
    }

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="e.g Sleep"
            onChangeText={ (val)=> changeHandler(val) }/>
            <TouchableOpacity 
            style={{width:'100%'}}>
                <Text style={styles.button}>Add Todo List</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center'
    },

    input:{
        width:'100%',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#dce',
        marginBottom: 20,
    },

    button:{
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#dce',
        textAlign: 'center',
        borderRadius: 10,
        fontWeight: '700',
        color: '#fff',
    }
});
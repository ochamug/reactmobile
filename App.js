
import  React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddItem from './components/addItem';

export default function App() {

  const [todos, setTodos] = useState([
    {title: 'Get The Groceries', id:'1'},
    {title: 'Finish Homework', id:'2'},
    {title: 'Code Training', id:'3'},
  ])

  const deleteItemHandler = (id) => {
    setTodos(todos.filter( todo => todo.id != id ));
  }

  const addItemHandler = (val) => {

    if(val === ''){
      Alert.alert('Oops!', 'Title can\'t be empty!', [
        { text: 'Got It!' }
      ]);
      return;
    }
    setTodos([
      {title: `${val}`, id: Math.random().toString()},
      ...todos,
    ])
  }

  return (
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
      <View style={ styles.container }>
        <Header/>
        <View style={ styles.content }>
          <AddItem
          addItemHandler = {addItemHandler}/>
          <FlatList
          style={{width:'100%', marginTop: 30}}
          data={ todos }
          keyExtractor= { todo => todo.id}
          renderItem = {({ item }) => (
            <TodoItem 
            item={ item }
            deleteItemHandler = {deleteItemHandler}/>
          )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  content:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  }
});


import  React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    {title: 'Get The Groceries', id:'1'},
    {title: 'Finish Homework', id:'2'},
    {title: 'Code Training', id:'3'},
  ])

  return (
    <View style={ styles.container }>
      <Header/>
      <View style={ styles.listContainer }>
        <FlatList
        style={{width:'100%'}}
        data={ todos }
        keyExtractor= { todo => todo.id}
        renderItem = {({ item }) => (
          <TodoItem item={ item }/>
        )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  listContainer:{
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
  }
});

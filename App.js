import { StatusBar } from 'expo-status-bar';
import  React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const temp = []
    for(let i=0; i<20; i++){
      temp.push({title: `Rapid Man ${i}`, id:`${i}`})
    }
    setBlogs(temp);
  }, [])

  const itemHandler = (id) => {
    setBlogs(blogs.filter(blog => blog.id!=id));
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={blogs}
        keyExtractor={(blog)=>blog.id}
        style={{
          width:"100%"
        }}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => itemHandler(item.id)}>
            <Text style={styles.item}>{item.title}</Text>  
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item:{
    marginTop: 30,
    width: '100%',
    padding: 30,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: "#d0d",
    color: "#fff",
    borderRadius: 999,
    marginHorizontal: 0,
  }
});

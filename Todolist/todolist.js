import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';

const TodoScreen = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoItems([...todoItems, { id: Date.now().toString(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ImageBackground source={require('../images/bukid1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new todo"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button title="Add" onPress={addTodo} />
        <FlatList
          style={styles.list}
          data={todoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.text}</Text>
              <Button title="Remove" onPress={() => removeTodo(item.id)} />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    height:850,
    width:450,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 50,
    marginBottom: 16,
    color: 'black', 
  },
  input: {
    width: '90%',
    padding: 18,
    marginBottom: 16,
    borderBottomWidth: 1,
    backgroundColor: 'white', 
  },
  list: {
    width: '90%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 8,
  },
});

export default TodoScreen;

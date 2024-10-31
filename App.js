import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import TodoInput from './Components/TodoInput';
import TodoItems from './Components/TodoItems';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoHandler(todoText){
    setTodoItems(currentList =>  [...currentList, {text: todoText,  id: todoItems.length.toString()}]); 
  }

  function deleteItemHandler(id){
    setTodoItems(currentList => todoItems.filter(todoItem =>  todoItem.id !== id));
  }

  return (
    <View style ={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler}/>

      <View style={styles.todosContainer}>
      <FlatList data={todoItems} renderItem={itemData=>{
        return (
          <TodoItems text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteItemHandler}/>
        );
        }}
        keyExtractor={(item, index)=> {
          return item.id;
        }}
        alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
appContainer:{
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
},
todosContainer:{
  flex: 10,
}
});
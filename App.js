import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import TodoInput from "./Components/TodoInput";
import TodoItems from "./Components/TodoItems";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  function addTodoHandler(todoText) {
    setTodoItems((currentList) => [
      ...currentList,
      { text: todoText, id: todoItems.length.toString() },
    ]);
    toggleModalHandler();
  }

  function deleteItemHandler(id) {
    setTodoItems((currentList) =>
      todoItems.filter((todoItem) => todoItem.id !== id)
    );
  }

  function toggleModalHandler() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add To-do"
          color="#AE445A"
          onPress={toggleModalHandler}
        />
        <TodoInput
          onAddTodo={addTodoHandler}
          isVisible={isModalVisible}
          onCancel={toggleModalHandler}
        />
        <View style={styles.todosContainer}>
          <FlatList
            data={todoItems}
            renderItem={(itemData) => {
              return (
                <TodoItems
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  todosContainer: {
    flex: 10,
  },
});

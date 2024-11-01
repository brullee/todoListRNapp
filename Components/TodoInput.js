import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function TodoInput(props) {
  const [todoText, setTodoText] = useState("");

  function TodoHandler(enteredText) {
    setTodoText(enteredText);
  }

  function addTodoHandler() {
    props.onAddTodo(todoText);
    setTodoText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/todo.png")}
          style={styles.imageStyling}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type here!"
          value={todoText}
          onChangeText={TodoHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyling}>
            <Button title="Add Todo" onPress={addTodoHandler} color="#AE445A" />
          </View>
          <View style={styles.buttonStyling}>
            <Button title="Cancel" onPress={props.onCancel} color="#F39F5A" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4f1c5e",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  buttonStyling: {
    width: 100,
    marginHorizontal: 8,
  },
  imageStyling: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

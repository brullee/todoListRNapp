import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItems(props) {
  return (
    <View style={styles.todoItems}>
      <Pressable
        // android_ripple={{ color: "#AF1740" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItems;

const styles = StyleSheet.create({
  todoItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#662549",
  },
  todoText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

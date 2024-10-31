import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItems(props){
    return(
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.todoItems}>
            <Text style={styles.todoText}>{props.text}</Text>  
        </View>
    </Pressable>
    );
}

export default TodoItems;

const styles = StyleSheet.create({
    todoItems:{
        margin: 8,
        padding: 8,
        borderRadius:6,
        backgroundColor: '#740938',
    },
    todoText:{
        color: 'white',
    }
});
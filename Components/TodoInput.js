import { useState } from 'react';
import { View, TextInput, Button ,StyleSheet } from 'react-native';

function TodoInput(props){
    const [todoText, setTodoText] = useState('');

    function TodoHandler(enteredText){
        setTodoText(enteredText);
    }

    function addTodoHandler(){
        props.onAddTodo(todoText);
        setTodoText('');
    }
    
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Type here!' value={todoText} onChangeText={TodoHandler}/>
            <Button title="Add Todo" onPress={addTodoHandler}/>
        </View>
    );
}


export default TodoInput;


const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 16
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
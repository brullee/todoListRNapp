import { useState } from 'react';
import { View, TextInput, Button ,StyleSheet } from 'react-native';

function GoalInput(props){
    const [goalText, setGoalText] = useState('');

    function GoalTextHandler(enteredText){
        setGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(goalText);
        setGoalText('');
    }
    
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your Goal!' value={goalText} onChangeText={GoalTextHandler}/>
            <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}


export default GoalInput;


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
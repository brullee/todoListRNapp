import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItems(props){
    // function deleteGoalHandler(){
    //     return props.onDeleteItem(props.id);
    // }

    return(
    // <Pressable onPress={deleteGoalHandler}>
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{props.text}</Text>  
        </View>
    </Pressable>
    );
}

export default GoalItems;

const styles = StyleSheet.create({
    goalItems:{
        margin: 8,
        padding: 8,
        borderRadius:6,
        backgroundColor: '#740938',
    },
    goalText:{
        color: 'white',
    }
});
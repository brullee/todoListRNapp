import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalInput from './Components/GoalInput';
import GoalItems from './Components/Goaltems';

export default function App() {
  const [coarseGoals, setCoarseGoals] = useState([]);

  function addGoalHandler(goalText){
    setCoarseGoals(currentGoals =>  [...currentGoals, {text: goalText,  id: coarseGoals.length.toString()}]); 
  }

  function deleteGoalHandler(id){
    setCoarseGoals(currentGoals => coarseGoals.filter(goal =>  goal.id !== id));
  }

  return (
    <View style ={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <View style={styles.goalsContainer}>
      <FlatList data={coarseGoals} renderItem={itemData=>{
        return (
          <GoalItems text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
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
goalsContainer:{
  flex: 10,
}
});
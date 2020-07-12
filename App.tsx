import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  GestureResponderEvent,
  Button,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface Goal {
  uid: string;
  value: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Array<Goal>>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle: string) => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        onCancelGoalAddition={cancelGoalAdditionHandler}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              onDelete={(event: GestureResponderEvent) => {
                removeGoalHandler(itemData.item.uid);
              }}
              title={itemData.item.value}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

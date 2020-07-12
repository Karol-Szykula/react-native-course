import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

interface Props {
  visible: boolean;
  onAddGoal: (text: string) => void;
  onCancelGoalAddition: () => void;
}

const GoalInput = ({ visible, onAddGoal, onCancelGoalAddition }: Props) => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  const inputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setEnteredGoal("");
    onAddGoal(enteredGoal);
  };

  return (
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Course goal"}
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButtonContainer}>
            <Button
              title="Cancel"
              color={"red"}
              onPress={onCancelGoalAddition}
            />
          </View>
          <View style={styles.addButtonContainer}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButtonContainer: {
    flex: 5,
    marginRight: 5,
  },
  addButtonContainer: {
    marginLeft: 5,
    flex: 5,
  },
});

export default GoalInput;

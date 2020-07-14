import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Card from "../components/Card";

interface StartGameScreenProps {}

const StartGameScreen = ({}: StartGameScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title={"Reset"} onPress={() => {}} />
          <Button title={"Confirm"} onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";

interface StartGameScreenProps {}

const StartGameScreen = ({}: StartGameScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"Reset"} onPress={() => {}} color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button
              title={"Confirm"}
              onPress={() => {}}
              color={Colors.accent}
            />
          </View>
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
  button: {
    flex: 0.4,
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

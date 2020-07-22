import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";

interface StartGameScreenProps {
  onStartGame: Function;
}

const StartGameScreen = ({ onStartGame }: StartGameScreenProps) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setIsConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setIsConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>Chosen Number:</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          onPress={() => {
            onStartGame(selectedNumber);
          }}
        >
          START GAME{" "}
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <BodyText style={styles.title}>The game screen</BodyText>
            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"number-pad"}
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title={"Reset"}
                    onPress={resetInputHandler}
                    color={Colors.primary}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title={"Confirm"}
                    onPress={confirmInputHandler}
                    color={Colors.accent}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    // flex: 0.4,
    width: Dimensions.get("window").width / 4,
  },
  title: {
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: "center",
    width: "80%",
    // maxWidth: "80%",
    maxWidth: "95%",
    minWidth: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: "50%",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

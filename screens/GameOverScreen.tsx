import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const SuccessImage = require("../assets/success.png");

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onNewGame: Function;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onNewGame,
}: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over</TitleText>
      <Image source={SuccessImage} />
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Correct number: {userNumber}</BodyText>
      <Button title={"New Game"} onPress={() => onNewGame()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;

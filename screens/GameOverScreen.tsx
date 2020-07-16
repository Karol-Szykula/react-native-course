import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

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
      <Text>The game is over</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Correct number: {userNumber}</Text>
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

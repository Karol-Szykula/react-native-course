import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://www.success.com/wp-content/uploads/2019/12/How-to-Align-Your-Career-With-Your-Personal-Definition-of-Success-1024x682.jpg",
          }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
});

export default GameOverScreen;

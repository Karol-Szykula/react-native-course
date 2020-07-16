import React from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

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
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://www.success.com/wp-content/uploads/2019/12/How-to-Align-Your-Career-With-Your-Personal-Definition-of-Success-1024x682.jpg",
          // }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
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
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;

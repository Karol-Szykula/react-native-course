import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Alert, FlatList, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength: number, itemData: any) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

interface GameScreenProps {
  userChoice: number;
  onGameOver: Function;
}

const GameScreen = ({ userChoice, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<Array<number>>([initialGuess]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuesses((currentPastGuesses) => [nextNumber, ...currentPastGuesses]);
  };

  let gameControls = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          onPress={() => {
            nextGuessHandler("lower");
          }}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
    </>
  );

  let listContainerStyle = styles.listContainer;

  if (availableDeviceHeight < 500) {
    gameControls = (
      <View style={styles.controls}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <NumberContainer>{currentGuess}</NumberContainer>
        <MainButton onPress={() => nextGuessHandler("greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      {gameControls}
      <View style={listContainerStyle}>
        {/* <ScrollView contentContainerStyle={styles.list}>
        {pastGuesses.map((guess, index) =>
          renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item.toString()}
          data={pastGuesses}
          renderItem={renderListItem.bind(null, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
    maxWidth: "98%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  listContainerBig: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default GameScreen;

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onRestart: Function;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onRestart,
}: GameOverScreenProps) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

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

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is over</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            ...{ marginVertical: availableDeviceHeight / 60 },
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              ...{ fontSize: availableDeviceHeight < 400 ? 16 : 20 },
            }}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={() => onRestart()}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 40,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;

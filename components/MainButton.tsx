import React, { ReactNode } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

import Colors from "../constants/colors";

interface MainButtonProps {
  children: string | number | ReactNode;
  onPress: Function;
}

const MainButton = ({ children, onPress }: MainButtonProps) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;

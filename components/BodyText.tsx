import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";

interface BodyTextProps {
  children: string;
  style?: any;
}

const BodyText = ({ children, style }: BodyTextProps) => {
  return <Text style={{ ...styles.body, ...style }}>{Children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TitleTextProps {
  children: string;
  style?: any;
}

const TitleText = ({ children, style }: TitleTextProps) => {
  return <Text style={{ ...styles.title, ...style }}></Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

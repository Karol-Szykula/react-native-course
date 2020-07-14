import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardProps {
  children: any;
  style?: any;
}

const Card = ({ children, style }: CardProps) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

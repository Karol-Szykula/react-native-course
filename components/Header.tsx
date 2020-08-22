import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          android: styles.headerAndroid,
          ios: styles.headerIOS,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: Platform.OS === "android" ? "white" : Colors.primary,
    fontSize: 18,
  },
});

export default Header;

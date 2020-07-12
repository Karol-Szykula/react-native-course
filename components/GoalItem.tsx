import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

interface Props {
  title: string;
  onDelete: (event: GestureResponderEvent) => void;
}

const GoalItem = ({ title, onDelete }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;

import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputProps {
  style?: any;
}

const Input = (props: InputProps | TextInputProps) => {
  const { style } = props;

  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;

import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { styles } from "../design/style";

export default function TextInputBox({
  title,
  type,
  onChangeText,
  max,
  style,
  onSubmit,
}) {
  return (
    <TextInput
      keyboardType={type}
      style={[styles.input, style]}
      onChangeText={onChangeText}
      maxLength={max}
      onSubmitEditing={onSubmit}
      placeholder={title}
    />
  );
}

const customStyle = StyleSheet.create({});

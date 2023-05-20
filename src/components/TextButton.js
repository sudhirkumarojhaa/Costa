import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { colorCode } from "../design/colorCode";

export default function TextButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.58}>
      <Text style={customStyle.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const customStyle = StyleSheet.create({
  btnText: {
    color: colorCode.btn,
    textTransform: "capitalize",
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
});

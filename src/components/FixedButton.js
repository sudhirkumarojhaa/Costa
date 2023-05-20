import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { colorCode } from "../design/colorCode";
import { styles } from "../design/style";

export default function FixedButton({ onPress, title }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={customStyle.btn}
    >
      <Text style={[styles.sm]}>{title}</Text>
    </TouchableOpacity>
  );
}

const customStyle = StyleSheet.create({
  btn: {
    padding: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 65,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: colorCode.brand,
  },
});

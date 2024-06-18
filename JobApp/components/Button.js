import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

export default function Button({ mode, style, children, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined"
          ? { backgroundColor: "white", borderColor: "#356899"} 
          : { backgroundColor: "#356899"},
        style,
      ]}
      labelStyle={[
        styles.text,
        mode === "outlined" && { color: "black" }, // Black text for outlined
      ]}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "auto",
    marginVertical: 10,
    paddingVertical: 1,
    borderRadius: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "white", // Default white text for contained
  },
});

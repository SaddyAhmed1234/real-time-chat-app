import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function MessageLine({ message }) {
  const isMe = message.user.id === "u1";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isMe ? "#E8E8E8" : "blue" },
        { alignSelf: isMe ? "flex-end" : "flex-start" },
      ]}
    >
      <Text style={[styles.text, { color: isMe ? "black" : "#fff" }]}>
        {message.content}
      </Text>
    </View>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignSelf: "flex-start",
    maxWidth: width - 100,
  },
  text: {
    color: "#fff",
  },
});

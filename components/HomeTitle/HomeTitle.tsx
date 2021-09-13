import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function HeaderTitle() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}> Chats </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 50,
    width: 42,
    height: 42,
    marginRight: 15,
  },
});

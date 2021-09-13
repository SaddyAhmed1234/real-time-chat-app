import React from "react";
import { View, TouchableNativeFeedback, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/core";

export default function CallComponent(props) {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#AAF", true)}
        onPress={() => console.log(route.params?.name)}
      >
        <View style={styles.wrappingView}>{props.children}</View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "hidden",
    flexDirection: "row",
  },
  wrappingView: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

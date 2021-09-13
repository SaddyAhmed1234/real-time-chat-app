import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/core";

export default function HeaderTitle() {
  const route = useRoute();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={{ uri: route.params?.uri }} style={styles.image} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={{ fontSize: 20 }}>
          {route.params?.name}
        </Text>
      </View>
    </>
  );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: width - 280,
  },
  image: {
    borderRadius: 50,
    width: 35,
    height: 35,
    marginRight: 15,
  },
});

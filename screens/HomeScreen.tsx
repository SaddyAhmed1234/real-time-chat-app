import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import ChatRooms from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ChatRooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ChatRoomItem chatRoom={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

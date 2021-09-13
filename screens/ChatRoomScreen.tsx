import React from "react";
import { FlatList, View, KeyboardAvoidingView } from "react-native";
import MessageLine from "../components/MessageLine";
import Chats from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute } from "@react-navigation/core";

const messages = Chats.messages;
// const

export default function ChatRoomScreen() {
  const route = useRoute();
  console.log(route.params?.name);
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <FlatList
          contentContainerStyle={{ flexDirection: "column-reverse" }}
          inverted
          showsVerticalScrollIndicator={false}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <MessageLine message={item} />;
          }}
        />
        <MessageInput />
      </View>
    </>
  );
}

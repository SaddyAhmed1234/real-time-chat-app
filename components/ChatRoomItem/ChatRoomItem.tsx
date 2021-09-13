import * as React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";

export default function ChatRoomItem({ chatRoom }) {
  let user = chatRoom.users[1];

  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("ChatRoom", { name: user.name, uri: user.imageUri })
      }
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: user.imageUri,
          }}
          style={styles.image}
        />
        {chatRoom.lastMessageCount && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{chatRoom.lastMessageCount}</Text>
          </View>
        )}
        <View style={styles.twoText}>
          <View style={styles.textContainer1}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{user.id}</Text>
          </View>
          <View>
            <Text style={styles.text2} numberOfLines={1}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

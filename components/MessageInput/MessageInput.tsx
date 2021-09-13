import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function MessageInput() {
  const [inputText, setInputText] = useState("");

  const handleInput = (text) => {
    setInputText(text);
  };

  const onPlusClick = () => {
    console.log("Plus Clicked");
  };

  const onSend = () => {
    console.log(`sending ${inputText}`);
    setInputText("");
  };

  const handleOnSend = () => {
    if (inputText.length === 0) {
      onPlusClick();
    } else {
      onSend();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View>
          <TouchableOpacity style={{ padding: 5 }}>
            <Entypo name="emoji-happy" size={22} color="#595959" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter the Message..."
            value={inputText}
            onChangeText={handleInput}
          />
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity style={{ padding: 5 }}>
            <Entypo name="camera" size={22} color="#595959" />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 5 }}>
            <FontAwesome5 name="microphone" size={22} color="#595959" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.right}>
        <TouchableOpacity style={{ padding: 5 }} onPress={handleOnSend}>
          <FontAwesome
            name={inputText.length === 0 ? "plus-circle" : "send"}
            size={inputText.length === 0 ? 33 : 26}
            color="#3777f0"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 10,
  },
  inputContainer: {
    flex: 5,
    marginHorizontal: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
  },
  input: {
    padding: 5,
    fontSize: 15,
  },
  mainContainer: {},
  left: {
    backgroundColor: "#F3F1F5",
    flexDirection: "row",
    marginRight: 10,
    padding: 5,
    flex: 8,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
  },
});

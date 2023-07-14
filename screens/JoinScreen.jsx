import {
  View,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const JoinScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const joinChat = (username) => {
    dispatch({ type: "server/join", data: username });
    navigation.navigate("FriendList");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        resizeMode="contain"
        style={{
          flex: 1,
        }}
        source={require("../assets/chat-icon.png")}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          value={username}
          onChangeText={(txt) => setUsername(txt)}
          style={{
            fontSize: 20,
          }}
          placeholder="Enter Username"
        />
        <Button title="Join Chat" onPress={() => joinChat(username)} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default JoinScreen;

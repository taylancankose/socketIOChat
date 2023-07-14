import { Image, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const dispatch = useDispatch();
  const selfUser = useSelector((state) => state.selfUser);
  const conversations = useSelector((state) => state.conversations);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: item.avatar }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item.username}
            </Text>
          </View>
        </View>
      ),
    });
  });
  const messages = conversations[item.userId].messages;
  console.log(conversations);
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        renderUsernameOnMessage
        messages={messages}
        onSend={(messages) => {
          dispatch({
            type: "private_message",
            data: { message: messages[0], conversationId: item.userId },
          });
          dispatch({
            type: "server/private_message",
            data: { message: messages[0], conversationId: item.userId },
          });
        }}
        user={{
          _id: selfUser.userId,
        }}
      />
    </View>
  );
}

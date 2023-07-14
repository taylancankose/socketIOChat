import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function FriendListScreen() {
  const navigation = useNavigation();
  const usersOnline = useSelector((state) => state.usersOnline);
  const { itemContainerStyle, avatarImgStyle, avatarNameViewStyle } = styles;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={usersOnline}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", {
                  item: item,
                })
              }
            >
              <View style={itemContainerStyle}>
                <Image style={avatarImgStyle} source={{ uri: item.avatar }} />
                <View style={avatarNameViewStyle}>
                  <Text style={{ fontSize: 20 }}>{item.username}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainerStyle: { flex: 1, flexDirection: "row" },
  avatarImgStyle: { width: 100, height: 100, borderRadius: 50 },
  avatarNameViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

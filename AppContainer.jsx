import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import JoinScreen from "./screens/JoinScreen";
import FriendListScreen from "./screens/FriendListScreen";

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Join">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Join"
          component={JoinScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="FriendList" component={FriendListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

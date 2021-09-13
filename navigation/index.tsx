import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import CallComponent from "../components/CallComponent/CallComponent";
import { View, Text } from "react-native";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeTitle from "../components/HomeTitle/HomeTitle";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";

// import { useRoute } from "@react-navigation/core";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  // const route = useRoute();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <HeaderTitle />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <CallComponent>
                <Ionicons name="call" size={25} color="#595959" />
              </CallComponent>
              <CallComponent>
                <Ionicons name="videocam" size={25} color="#595959" />
              </CallComponent>
              <CallComponent>
                <SimpleLineIcons
                  name="options-vertical"
                  size={20}
                  color="#595959"
                />
              </CallComponent>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HomeTitle />,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
              }}
            >
              <CallComponent>
                <Entypo name="camera" size={25} color="#595959" />
              </CallComponent>
              <CallComponent>
                <Entypo name="edit" size={25} color="#595959" />
              </CallComponent>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

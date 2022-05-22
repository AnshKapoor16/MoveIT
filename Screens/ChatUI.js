import { View, Text, StyleSheet, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Chatscreen from "./Chatscreen";

import logo from "../assets/account.png";

const Drawer = createDrawerNavigator();

const ChatUI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chats</Text>
      <Chatscreen />
      <Chatscreen />
      <Chatscreen />
      <Chatscreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
  },
  text: {
    marginTop: 18,
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: "#d0d0d0",
  },
});

export default ChatUI;

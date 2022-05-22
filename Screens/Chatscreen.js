import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import logo from "../assets/account.png";

const Chatscreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Image source={logo} style={styles.chatimg} />
      <Text style={styles.text1}>ChatName</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    marginTop: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 10,
    width: "80%",
    paddingHorizontal: 20,
  },
  chatimg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
  },
  text1: {
    fontSize: 20,
    marginLeft: "10%",
  },
});

export default Chatscreen;

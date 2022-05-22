import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import logo from "../assets/MoveITlogo.png";
import searchicon from "../assets/search.png";
import menuicon from "../assets/account.png";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: "#d4dccd",
          borderless: true,
          radius: 50,
          foreground: false,
        }}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Image source={menuicon} style={styles.mnuimg} />
      </Pressable>

      <Image source={logo} style={styles.logoimg} />
      <Image source={searchicon} style={styles.srchimg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
  logoimg: {
    width: 250,
    marginRight: 15,
    resizeMode: "contain",
  },
  srchimg: {
    width: 25,
    resizeMode: "contain",
  },
  mnuimg: {
    width: 40,
    resizeMode: "contain",
  },
});

export default Header;

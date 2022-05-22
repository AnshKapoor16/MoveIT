import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import whitearrow from "../assets/whitearrow.png";

const Locationindicator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Delhi</Text>
      <Image source={whitearrow} style={styles.whiteimg} />
      <Text style={styles.text}>Bangalore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  whiteimg: {
    width: "12%",
    resizeMode: "contain",
  },
});

export default Locationindicator;

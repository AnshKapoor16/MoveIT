import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import homelogo from "../assets/home.png";
import accountlogo from "../assets/chat.png";
import paymentlogo from "../assets/payment.png";
import bookinglogo from "../assets/booking.png";
import trackinglogo from "../assets/tracking.png";

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: "#d4dccd",
          borderless: true,
          radius: 50,
          foreground: false,
        }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image source={homelogo} style={styles.homelogo} />
      </Pressable>
      <Pressable
        android_ripple={{
          color: "#d4dccd",
          borderless: true,
          radius: 50,
          foreground: false,
        }}
        onPress={() => props.navigation.navigate("Booking")}
      >
        <Image source={bookinglogo} style={styles.logos} />
      </Pressable>

      <Pressable
        android_ripple={{
          color: "#d4dccd",
          borderless: true,
          radius: 50,
          foreground: false,
        }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image source={paymentlogo} style={styles.logos} />
      </Pressable>

      <Pressable
        android_ripple={{
          color: "#d4dccd",
          borderless: true,
          radius: 50,
          foreground: false,
        }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image source={trackinglogo} style={styles.logos} />
      </Pressable>
      <Pressable
        android_ripple={{
          color: "#d4dccd",
          borderless: true,
          radius: 50,
          foreground: false,
        }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image source={accountlogo} style={styles.accountlogo} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logos: {
    width: 35,
    height: "100%",
    resizeMode: "contain",
  },
  homelogo: {
    width: 35,
    resizeMode: "contain",
    height: "100%",
    marginBottom: 9,
  },
  accountlogo: {
    width: 33,
    resizeMode: "contain",
    height: "100%",
  },
});

export default Footer;

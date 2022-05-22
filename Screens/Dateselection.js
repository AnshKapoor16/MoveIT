import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import imagebg from "../assets/blurry-gradient.png";

import Header from "./Header";
import Footer from "./Footer";
import Locationindicator from "./Locationindicator";
import { Calendar } from "react-native-calendars";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";

const Dateselection = () => {
  const navigation = useNavigation();
  const date = {
    "2022-05-23": { selected: true, marked: true, selectedColor: "blue" },
  };
  let dates;
  return (
    <SafeAreaView>
      <ImageBackground source={imagebg} style={styles.imgbg}>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <Locationindicator />
          <View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  padding: 20,
                  fontWeight: "600",
                  borderBottomWidth: 1,
                  borderBottomColor: "#d0d0d0",
                }}
              >
                Enter Pickup Date
              </Text>
              <Calendar
                style={{
                  width: 370,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                markedDates={date}
                onDayPress={(day) => {
                  const s = day.dateString;
                  dates = {
                    [s]: {
                      selected: true,
                      marked: true,
                      selectedColor: "blue",
                    },
                  };
                  console.log(dates);
                }}
              />
            </View>
          </View>

          <View style={styles.pricecont}>
            <Pressable
              android_ripple={{
                color: "#d4dccd",
                borderless: true,
                foreground: false,
              }}
            >
              <Text style={styles.pricetext}>Get Price</Text>
            </Pressable>
          </View>

          <Footer navigation={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgbg: {
    width: "100%",
    height: "100%",
  },
  pricecont: {
    height: "10%",
    width: "90%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  pricetext: {
    color: "white",
    fontSize: 17,
  },
});

export default Dateselection;

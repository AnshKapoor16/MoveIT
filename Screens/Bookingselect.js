import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import arrowhead from "../assets/arrowhead.png";

const Bookingselect = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text1}>Choose Service Type</Text>
      </View>
      <View style={styles.main}>
        <Pressable
          android_ripple={{
            color: "#d4dccd",
            borderless: true,
            foreground: false,
          }}
          hitSlop={50}
          onPress={() => props.navigation.navigate("Businessmaterial")}
        >
          <View>
            <Text style={styles.text2}>Business</Text>
            <Text style={styles.text3}>
              Industrial,Commercial or Enterprise Goods
            </Text>
          </View>
        </Pressable>
        <Pressable
          android_ripple={{
            color: "#d4dccd",
            borderless: true,
            foreground: false,
          }}
          hitSlop={50}
          onPress={() => props.navigation.navigate("Businessmaterial")}
        >
          <Image source={arrowhead} style={styles.arrowheadimg} />
        </Pressable>
      </View>
      <View style={styles.main}>
        <View>
          <Text style={styles.text2}>Personal</Text>
          <Text style={styles.text3}>Household or Personal Goods</Text>
        </View>
        <Image source={arrowhead} style={styles.arrowheadimg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: "40%",
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 30,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    flexDirection: "row",
  },
  arrowheadimg: {
    width: 12,
    height: "100%",
    resizeMode: "contain",
  },
  text1: {
    fontWeight: "400",
    fontSize: 22,
  },
  text2: {
    fontWeight: "300",
    fontSize: 20,
  },
  text3: {
    fontWeight: "200",
    fontSize: 10,
  },
});

export default Bookingselect;

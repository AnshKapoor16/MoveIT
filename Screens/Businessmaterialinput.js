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
import "react-native-gesture-handler";
import React from "react";

const Businessmaterialinput = (props) => {
  return (
    <KeyboardAvoidingView style={styles.maincontainer}>
      <View style={styles.locationcont2}>
        <View style={styles.locationcont3}>
          <View style={styles.locationcont}>
            <Text style={styles.locationtext}>Enter Weight (in Kg)</Text>
            <TextInput
              style={{ borderBottomWidth: 1 }}
              keyboardType={"numeric"}
              autoCapitalize="words"
            ></TextInput>
          </View>
          <View style={styles.locationcont1}>
            <Text style={styles.locationtext}>
              Enter Dimensions (in Meters)
            </Text>
            <TextInput
              style={{ borderBottomWidth: 1 }}
              keyboardType={"numeric"}
              autoCapitalize="words"
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.pricecont}>
        <Pressable
          android_ripple={{
            color: "#d4dccd",
            borderless: true,
            radius: 100,
            foreground: false,
          }}
          hitSlop={100}
          onPress={() => props.navigation.navigate("Dateselection")}
        >
          <Text style={styles.pricetext}>Submit</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
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
  maincontainer: {
    width: "90%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 30,
  },
  locationcont3: {
    height: "100%",
  },
  locationcont2: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  locationcont: {
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // flex: 1,
    height: "50%",
    paddingHorizontal: 10,
    padding: 10,
    justifyContent: "space-evenly",
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
  },
  locationcont1: {
    backgroundColor: "white",
    // flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-evenly",
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
    height: "50%",
  },
  pricecont: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pricetext: {
    color: "white",
    fontSize: 18,
  },
  locationtext: {
    fontSize: 10,
    color: "#909090",
  },
});

export default Businessmaterialinput;

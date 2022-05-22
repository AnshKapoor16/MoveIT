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
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import imagebg from "../assets/blurry-gradient.png";
import account from "../assets/account.png";

import Header from "./Header";
import Footer from "./Footer";

const Profile = () => {
  const windowHeight = useWindowDimensions().height;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground source={imagebg} style={styles.imgbg}>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.main}>
            <Image source={account} style={styles.accountlogo} />
            <View style={styles.maintext}>
              <Text style={styles.text1}>Name:</Text>
              <Text style={styles.text}>Sudarshan Jain</Text>
            </View>
            <View style={styles.maintext}>
              <Text style={styles.text1}>Username:</Text>
              <Text style={styles.text}>sudarshan_jain</Text>
            </View>
            <View style={styles.maintext}>
              <Text style={styles.text1}>Aadhar Number:</Text>
              <Text style={styles.text}>01213231</Text>
            </View>
            <View style={styles.maintext}>
              <Text style={styles.text1}>KYC:</Text>
              <Text style={styles.text}>Verified</Text>
            </View>
            <View style={styles.maintext}>
              <Text style={styles.text}>Seeker</Text>
            </View>
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
  main: {
    height: "75%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 30,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  accountlogo: {
    width: "50%",
    height: "40%",
    resizeMode: "contain",
  },
  maintext: {
    width: "90%",
    fontSize: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    padding: 15,
  },
  text1: {
    fontSize: 10,
    color: "#909090",
  },
});

export default Profile;

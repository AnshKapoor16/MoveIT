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

import Header from "./Header";
import Footer from "./Footer";
import Locationindicator from "./Locationindicator";
import Businessmaterialinput from "./Businessmaterialinput";

const Businessmaterial = () => {
  const windowHeight = useWindowDimensions().height;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground source={imagebg} style={styles.imgbg}>
        <View style={styles.container}>
          <Header navigation={navigation} />

          <Locationindicator />
          <Businessmaterialinput navigation={navigation} />

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
});

export default Businessmaterial;

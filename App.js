import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Booking from "./Screens/Booking";
import Profile from "./Screens/Profile";
import Businessmaterial from "./Screens/Businessmaterial";
import Dateselection from "./Screens/Dateselection";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Businessmaterial" component={Businessmaterial} />
        <Stack.Screen name="Dateselection" component={Dateselection} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

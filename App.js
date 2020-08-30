import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddRestaurant from "./src/Screens/AddRestaurant";
import DeliveryBoyList from "./src/Screens/DeliveryBoyList";
import { Avatar } from "react-native-elements";
export default function App() {
  return (
    <View>
      <DeliveryBoyList />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

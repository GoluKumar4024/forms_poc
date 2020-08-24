import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddRestaurant from "./src/Screens/AddRestaurant";
export default function App() {
  return (
    // <View style={styles.container}>
    //   <AddResturant />
    //   <StatusBar style="auto" />
    // </View>
    <AddRestaurant />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

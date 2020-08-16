import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUpForm from "./SignUpForm";
import MyTextInput from "./components/MyTextInput";
import MySwitch from "./components/MySwitch";

export default function App() {
  return (
    <View style={styles.container}>
      <MyTextInput />
      <MySwitch />
      <StatusBar style="auto" />
    </View>
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

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddRestaurant from "./src/Screens/AddRestaurant";
import DeliveryBoyList from "./src/Screens/DeliveryBoyList";
import DeliveryBoyCard from "./src/Screens/DeliveryBoyCard";
export default function App() {
  return (
    <View>
      <DeliveryBoyCard />
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AddRestaurant from "./src/Screens/AddRestaurant";
import DeliveryBoyList from "./src/Screens/DeliveryBoyList";
import DeliveryBoyCard from "./src/Screens/DeliveryBoyCard";

import { Provider as BlogProvider } from "./src/Practice/BlogReducer";
import BlogScreen from "./src/Practice/BlogScreen";
export default function App() {
  return (
    <BlogProvider>
      <BlogScreen />
    </BlogProvider>
  );
}

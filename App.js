import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AddDeliveryBoy from "./src/Screens/DeliveryBoy/AddDeliveryBoy";

import Routes from "./src/Routes";
import { Provider as DeliveryBoyProvider } from "./src/contexts/DeliveryBoyContext";
import { Provider as ShowFormContextProvider } from "./src/contexts/ShowFormContext";

//import PracticeRoute from "./src/Practice/PracticeRoute";

export default function App() {
  return (
    <ShowFormContextProvider>
      <DeliveryBoyProvider>
        <Routes />
      </DeliveryBoyProvider>
    </ShowFormContextProvider>
  );
}

/*
// main work



*/

import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";

/*============================================================================================================= */

import AddDeliveryBoy from "./Screens/AddDeliveryBoy";
import DeliveryBoyList from "./Screens/DeliveryBoyList";
import DeliveryBoyCard from "./Screens/DeliveryBoyCard";

/*=============================================================================================================*/

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeliveryBoyList">
        <Stack.Screen name="DeliveryBoyList" component={DeliveryBoyList} />
        <Stack.Screen name="Profile" component={DeliveryBoyCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

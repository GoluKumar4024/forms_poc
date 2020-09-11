import React, { Component, useContext } from "react";
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

import AddDeliveryBoy from "./Screens/DeliveryBoy/AddDeliveryBoy";
import DeliveryBoyList from "./Screens/DeliveryBoy/DeliveryBoyList";
import DeliveryBoyCard from "./Screens/DeliveryBoy/DeliveryBoyCard";
import UpdateDeliveryBoy from "./Screens/DeliveryBoy/UpdateDeliveryBoy";

import { Context as ShowFormContext } from "./contexts/ShowFormContext";
/*=============================================================================================================*/

const Stack = createStackNavigator();

// const DeliveryBoyDetails = () => {
//   return (

//   );
// };

const Routes = () => {
  // To determine whether the "AddDeliveryBoy" form shuld be rendered or
  // The "DeliveryBoyDetails" component stack should be rendered
  //const { state } = useContext(ShowFormContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeliveryBoyList">
        <Stack.Screen name="DeliveryBoyList" component={DeliveryBoyList} />
        <Stack.Screen name="Profile" component={DeliveryBoyCard} />
        <Stack.Screen name="Update Data" component={UpdateDeliveryBoy} />
        <Stack.Screen name="Add Delivery Boy" component={AddDeliveryBoy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

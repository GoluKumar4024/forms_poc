import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import DeliveryBoy from "../RawData/DeliveryBoy.json";

const DeliveryBoyList = () => {
  return (
    <View>
      <Text>Here i will render list of employees</Text>
      {/* <Text>{JSON.stringify(DeliveryBoy)}</Text> */}
      <FlatList
        data={DeliveryBoy}
        renderItem={({ item }) => (
          <View style={styles.renderStyle}>
            <Text>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
          </View>
        )}
        keyExtractor={(item) => item.lastName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  renderStyle: {
    borderWidth: 2,
    marginHorizontal: 0.2,
    marginVertical: 4,
    borderColor: "black",
  },
});

export default DeliveryBoyList;

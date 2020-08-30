import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import DeliveryBoy from "../RawData/DeliveryBoy.json";
import { Header } from "react-native-elements";

// keyExtractor = (item, index) => {
//   return (item) => `${item.lastName} ${item.phone}`;
// };

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "black",
        marginLeft: "14%",
      }}
    />
  );
};

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item, index }) => {
  return (
    <ListItem
      title={`${item.firstName} ${item.lastName}`}
      subtitle={item.userId}
      leftAvatar={
        <Avatar rounded source={{ uri: "foo.jpg" }} title={item.firstName[0]} />
      }
      containerStyle={{ borderBottomWidth: 0 }}
    />
  );
};

const DeliveryBoyList = () => {
  return (
    <React.Fragment>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Delivery Boy List",
          style: { color: "#fff" },
        }}
      />
      {/* <Text>{JSON.stringify(DeliveryBoy)}</Text> */}
      <FlatList
        data={DeliveryBoy}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

export default DeliveryBoyList;

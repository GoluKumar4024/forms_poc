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
      
      onPress={() => {}}
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
        onEndReachedThreshold={50}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

export default DeliveryBoyList;

import React, { Component, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { FAB } from "react-native-paper";
import { Context as DeliveryBoyContext } from "../../contexts/DeliveryBoyContext";
import { Context as ShwFormContext } from "../../contexts/ShowFormContext";

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

const DeliveryBoyList = ({ navigation }) => {
  // This determines the data to be rendered as list
  // so it is being extracted from DeliveryBoyContext
  const { state } = useContext(DeliveryBoyContext);

  return (
    <SafeAreaView>
      {/* <Text>{JSON.stringify(DeliveryBoy)}</Text> */}
      <FlatList
        data={state}
        renderItem={({ item, index }) => {
          return (
            <ListItem
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.userId}
              leftAvatar={
                <Avatar
                  rounded
                  source={{ uri: "foo.jpg" }}
                  title={item.firstName[0]}
                />
              }
              onPress={() => {
                navigation.navigate("Profile", { item: { ...item } });
              }}
            />
          );
        }}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        onEndReachedThreshold={50}
      />
      <FAB
        style={styles.fab}
        medium
        icon="plus"
        onPress={() => navigation.push("Add Delivery Boy")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default DeliveryBoyList;

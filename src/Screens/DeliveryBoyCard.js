import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Header } from "react-native-elements";
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { DataTable } from "react-native-paper";

const data = {
  id: 15,
  firstName: "Georgette",
  lastName: "Townsend",
  address: {
    coord: [-45.143678, 13.233456],
    street: "Terrace Place",
    landmark: "Indiana",
    city: "Leola",
    zipcode: "380359",
  },
  phone: "(878) 540-2132",
  userId: "georgette@zilencio.com",
  password: "Morin",
};

const dataArray = {
  "First Name": data.firstName,
  "Last Name": data.lastName,
  "Phone No": data.phone,
  "User Id": data.userId,
  Password: data.password,
  Coordinates: `[ ${data.address.coord[0]},${data.address.coord[0]} ]`,
  " Street": data.address.street,
  Landmark: data.address.landmark,
  City: data.address.city,
  Zipcode: data.address.zipcode,
};

const DeliveryBoyCard = () => {
  return (
    <React.Fragment>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Profile",
          style: { color: "#fff" },
        }}
      />
      <View style={styles.profileViewStyle}>
        <View style={styles.profileAvatarStyle}>
          <Avatar
            size="large"
            rounded
            source={{ uri: "foo.jpg" }}
            title={data.firstName[0]}
          />
        </View>
        <View style={styles.detailsStyle}>
          {/* <Text>{JSON.stringify(data, null, 5)}</Text> */}
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Parameters</DataTable.Title>
              <DataTable.Title>Details</DataTable.Title>
            </DataTable.Header>
            {Object.keys(dataArray).map((k) => (
              <DataTable.Row key>
                <DataTable.Cell>{k}</DataTable.Cell>
                <DataTable.Cell>{dataArray[k]}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
        <View style={styles.futureActions}></View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  profileViewStyle: {
    display: "flex",
    flex: 1,
  },
  profileAvatarStyle: {
    flex: 2,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsStyle: {
    flex: 10,
    backgroundColor: "white",
  },
  futureActions: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default DeliveryBoyCard;

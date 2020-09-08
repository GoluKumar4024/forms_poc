import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { DataTable } from "react-native-paper";

// const data = {
//   id: 15,
//   firstName: "Georgette",
//   lastName: "Townsend",
//   address: {
//     coord: [-45.143678, 13.233456],
//     street: "Terrace Place",
//     landmark: "Indiana",
//     city: "Leola",
//     zipcode: "380359",
//   },
//   phone: "(878) 540-2132",
//   userId: "georgette@zilencio.com",
//   password: "Morin",
// };

const DeliveryBoyCard = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item);
  const dataArray = {
    "First Name": item.firstName,
    "Last Name": item.lastName,
    "Phone No": item.phone,
    "User Id": item.userId,
    Password: item.password,
    Coordinates: `[ ${item.address.coord[0]},${item.address.coord[1]} ]`,
    " Street": item.address.street,
    Landmark: item.address.landmark,
    City: item.address.city,
    Zipcode: item.address.zipcode,
  };

  return (
    <React.Fragment>
      {/* <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Profile",
          style: { color: "#fff" },
        }}
      /> */}
      <View style={styles.profileViewStyle}>
        <View style={styles.profileAvatarStyle}>
          <Avatar
            size="large"
            rounded
            source={{ uri: "foo.jpg" }}
            title={item.firstName[0]}
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
        <TouchableOpacity
          style={styles.futureActions}
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
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
    backgroundColor: "white",
  },
});

export default DeliveryBoyCard;

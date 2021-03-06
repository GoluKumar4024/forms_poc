import React, { Component, useContext } from "react";
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
import { Context as DeliveryBoyContext } from "../../contexts/DeliveryBoyContext";

const DeliveryBoyCard = ({ route, navigation }) => {
  const { item } = route.params;

  const { deleteDeliveryBoy } = useContext(DeliveryBoyContext);
  console.log(item);
  const dataArray = {
    "First Name": item.firstName,
    "Last Name": item.lastName,
    "Phone No": item.contactNumber,
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
        <View style={styles.futureActions}>
          <TouchableOpacity
            title="Update"
            style={styles.update}
            onPress={() =>
              navigation.navigate("Update Data", { item: { ...item } })
            }
          >
            <Text>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Delete"
            style={styles.delete}
            onPress={() =>
              deleteDeliveryBoy(item, () =>
                navigation.navigate("DeliveryBoyList")
              )
            }
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "tomato",
  },
  update: {
    borderWidth: 1,
    borderColor: "blue",
    color: "blue",
    fontSize: 45,
    padding: 10,
  },
  delete: {
    borderWidth: 1,
    borderColor: "blue",
    color: "blue",
    fontSize: 45,
    padding: 10,
  },
});

export default DeliveryBoyCard;

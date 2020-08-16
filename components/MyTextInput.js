import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const MyTextInput = (props) => {
  console.log(props);
  //console.log(props.name);
  //console.log(placeHolder);
  return (
    <View>
      <Text>{props.name}</Text>
      <TextInput
        name={props.name}
        style={{
          borderColor: "black",
          borderRadius: 4,
          backgroundColor: "#e0fffa",
          height: 40,
          width: 250,
        }}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default MyTextInput;

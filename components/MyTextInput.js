import React, { Component } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";

const MyTextInput = () => {
  return (
    <TextInput
      name="firstName"
      style={{
        borderColor: "black",
        borderRadius: 4,
        backgroundColor: "#e0fffa",
        height: 40,
        width: 250,
      }}
      placeholder="First Name"
    />
  );
};

export default MyTextInput;

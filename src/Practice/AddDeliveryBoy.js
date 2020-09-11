import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "react-native-elements";
import StyledInput from "../components/StyledInput";

const AddDeliveryBoy = () => {
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .label("First Name")
      .required("*Required")
      .min(1, "First name should not be empty")
      .max(40, "First Name is too Big!!!"),

    lastName: Yup.string()
      .label("Last Name")
      .required("*Required")
      .min(1, "Last name should not be empty")
      .max(40, "Last Name is too Big!!!"),

    address: Yup.object().shape({
      coord: Yup.object().shape({
        0: Yup.string().label("Longitude").required(),
        1: Yup.string().label("Latitude").required(),
      }),

      street: Yup.string().label("Street").required("*Required"),

      landmark: Yup.string().label("Landmark").required("*Required"),

      city: Yup.string().label("City").required("*Required"),

      zipcode: Yup.number()
        .label("Zipcode")
        .required("*Required")
        .test("len", "Must be exactly 6 characters", (val) => {
          if (val) return val.toString().length === 6;
        }),
    }),

    contactNumber: Yup.string()
      .label("Contact Number")
      .required()
      .matches(phoneRegExp, "Contact number is not valid"),

    userId: Yup.string()
      .label("User Id")
      .required()
      .min(5, "User Id should be atleast 5 characters long")
      .max(30, "User Id is too Big!!"),

    password: Yup.string()
      .label("Password")
      .required()
      .min(2, "very short password")
      .max(20, "We prefer a medium sized password"),
  });

  return (
    <React.Fragment>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Add Delivery Boy", style: { color: "#fff" } }}
      />

      <KeyboardAwareScrollView style={{ marginTop: 20 }}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: {
              coord: ["", ""],
              street: "",
              landmark: "",
              city: "",
              zipcode: "",
            },
            contactNumber: "",
            userId: "",
            password: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values), null, 10);
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <React.Fragment>
              <StyledInput
                label="First Name"
                formikProps={formikProps}
                formikKey="firstName"
                autoFocus
                placeholder="First Name"
              />
              <StyledInput
                label="Last Name"
                formikProps={formikProps}
                formikKey="lastName"
                placeholder="Last Name"
              />
              <StyledInput
                label="Address Longitde"
                formikProps={formikProps}
                formikKey="address.coord[0]"
                placeholder="Address Longitude"
              />
              <StyledInput
                label="Address Latitude"
                formikProps={formikProps}
                formikKey="address.coord[1]"
                placeholder="Address Latitude"
              />
              <StyledInput
                label="Street"
                formikProps={formikProps}
                formikKey="address.street"
                placeholder="Street"
              />
              <StyledInput
                label="Landmark"
                formikProps={formikProps}
                formikKey="address.landmark"
                placeholder="Landmark"
              />
              <StyledInput
                label="City"
                formikProps={formikProps}
                formikKey="address.city"
                placeholder="City"
              />
              <StyledInput
                label="Zipcode"
                formikProps={formikProps}
                formikKey="address.zipcode"
                placeholder="Zipcode"
              />
              <StyledInput
                label="Contact Number"
                formikProps={formikProps}
                formikKey="contactNumber"
                placeholder="Contact Number"
              />
              <StyledInput
                label="User Id"
                formikProps={formikProps}
                formikKey="userId"
                placeholder="User Id"
              />
              <StyledInput
                label="Password"
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password"
                secureTextEntry
              />
              <Button title="Add" onPress={formikProps.handleSubmit} />
            </React.Fragment>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

export default AddDeliveryBoy;

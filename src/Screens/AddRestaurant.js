import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "react-native-elements";
import StyledInput from "../components/StyledInput";

const AddRestaurant = () => {
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = Yup.object().shape({
    hotelName: Yup.string()
      .label("Hotel Name")
      .required("*Required")
      .min(5, "Restaurent name should be of length atleast 5")
      .max(40, "Name of hotel is too Big!!!"),

    hotelOwnerName: Yup.string()
      .label("Hotel Owner Name")
      .required("*Required")
      .min(5, "Owner's name should be of length atleast 5")
      .max(40, "Name of owner is Too Big!!!"),

    hotelAddress: Yup.string().label("Hotel Address").required("*Required"),

    coordinates: Yup.object().shape({
      longitude: Yup.string().label("Longitude").required("*Required"),
      latitude: Yup.string().label("Latitude").required("*Required"),
    }),

    contactNumber: Yup.string()
      .label("Contact Number")
      .required()
      .matches(phoneRegExp, "Contact number is not valid"),

    emergencyContactNumber: Yup.string()
      .label("Emergency Contact")
      .required()
      .matches(phoneRegExp, "Contact number is not valid")
      .test(
        "different-contact",
        "Emergency Contact should be different from primary Contact ",
        function (value) {
          return this.parent.contactNumber !== value;
        }
      ),

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

    confirmPassword: Yup.string()
      .required("*Required")
      .test("passwords-matching", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });

  return (
    <React.Fragment>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Add Hotel", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />

      <KeyboardAwareScrollView style={{ marginTop: 20 }}>
        <Formik
          initialValues={{
            hotelName: "",
            hotelOwnerName: "",
            hotelAddress: "",
            coordinates: {
              longitude: "",
              latitude: "",
            },
            contactNumber: "",
            emergencyContactNumber: "",
            userId: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values), null, 10);
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <React.Fragment>
              <StyledInput
                label="Hotel Name"
                formikProps={formikProps}
                formikKey="hotelName"
                autoFocus
                placeholder="Hotel Name"
              />
              <StyledInput
                label="Hotel Owner Name"
                formikProps={formikProps}
                formikKey="hotelOwnerName"
                placeholder="Hotel Owner Name"
              />
              <StyledInput
                label="Hotel Address"
                formikProps={formikProps}
                formikKey="hotelAddress"
                placeholder="Hotel Address"
              />
              <StyledInput
                label="Hotel Longitde"
                formikProps={formikProps}
                formikKey="coordinates.longitude"
                placeholder="Longitude"
              />
              <StyledInput
                label="Hotel Latitude"
                formikProps={formikProps}
                formikKey="coordinates.latitude"
                placeholder="Latitude"
              />
              <StyledInput
                label="Contact Number"
                formikProps={formikProps}
                formikKey="contactNumber"
                placeholder="Contact Number"
              />
              <StyledInput
                label="Secondary Contact"
                formikProps={formikProps}
                formikKey="emergencyContactNumber"
                placeholder="Secondary Contact"
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
              <StyledInput
                label="Confirm Password"
                formikProps={formikProps}
                formikKey="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
              <Button title="Add Hotel" onPress={formikProps.handleSubmit} />
            </React.Fragment>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

export default AddRestaurant;

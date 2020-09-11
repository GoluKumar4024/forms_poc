import React, { Component, useContext } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "react-native-elements";
import StyledInput from "../../components/StyledInput";
import { Context as DeliveryBoyContext } from "../../contexts/DeliveryBoyContext";
import { Context as ShowFormContext } from "../../contexts/ShowFormContext";

const AddDeliveryBoy = () => {
  // Importing DeliveryBoy context from the DeliveryBoyContext
  // for performing the operation
  const { state, addDeliveryBoy } = useContext(DeliveryBoyContext);

  // this function will help in re-rendering the "DeliveryBoyDetails" stack after
  // the form is submitted,
  // I will pass this function as callback from "submit" part here
  // and it will be called as callback in "addDeliveryBoy()" function
  const { hideForm } = useContext(ShowFormContext);

  //======================================================

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
      longitude: Yup.string().label("Longitude").required(),

      latitude: Yup.string().label("latitude").required(),

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

  //================================================================

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
              longitude: "",
              latitude: "",
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
            values.address.coord = [
              values.address.longitude,
              values.address.latitude,
            ];
            delete values.address.longitude;
            delete values.address.latitude;
            alert(JSON.stringify(values), null, 10);
            // console.log(values);
            addDeliveryBoy(values, hideForm);
            // console.log(state);
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
              {formikProps.touched.firstName &&
                formikProps.errors.firstName && (
                  <Text style={styles.error}>
                    {formikProps.errors.firstName}
                  </Text>
                )}

              <StyledInput
                label="Last Name"
                formikProps={formikProps}
                formikKey="lastName"
                placeholder="Last Name"
              />
              {formikProps.touched.lastName && formikProps.errors.lastName && (
                <Text style={styles.error}>{formikProps.errors.lastName}</Text>
              )}

              <StyledInput
                label="Longitude"
                formikProps={formikProps}
                formikKey="address.longitude"
                placeholder="Longitude"
              />
              {formikProps.errors.address &&
                formikProps.touched.address &&
                formikProps.errors.address.longitude &&
                formikProps.touched.address.longitude && (
                  <Text style={styles.error}>
                    {formikProps.errors.address.longitude}
                  </Text>
                )}

              <StyledInput
                label="Latitude"
                formikProps={formikProps}
                formikKey="address.latitude"
                placeholder="Latitude"
              />
              {formikProps.errors.address &&
                formikProps.touched.address &&
                formikProps.errors.address.latitude &&
                formikProps.touched.address.latitude && (
                  <Text style={styles.error}>
                    {formikProps.errors.address.latitude}
                  </Text>
                )}

              <StyledInput
                label="Street"
                formikProps={formikProps}
                formikKey="address.street"
                placeholder="Street"
              />
              {formikProps.errors.address &&
                formikProps.touched.address &&
                formikProps.errors.address.street &&
                formikProps.touched.address.street && (
                  <Text style={styles.error}>
                    {formikProps.errors.address.street}
                  </Text>
                )}

              <StyledInput
                label="Landmark"
                formikProps={formikProps}
                formikKey="address.landmark"
                placeholder="Landmark"
              />
              {formikProps.errors.address &&
                formikProps.touched.address &&
                formikProps.errors.address.landmark &&
                formikProps.touched.address.landmark && (
                  <Text style={styles.error}>
                    {formikProps.errors.address.landmark}
                  </Text>
                )}

              <StyledInput
                label="City"
                formikProps={formikProps}
                formikKey="address.city"
                placeholder="City"
              />
              {formikProps.errors.address &&
                formikProps.touched.address &&
                formikProps.errors.address.city &&
                formikProps.touched.address.city && (
                  <Text style={styles.error}>
                    {formikProps.errors.address.city}
                  </Text>
                )}

              <StyledInput
                label="ZipCode"
                formikProps={formikProps}
                formikKey="address.zipcode"
                placeholder="ZipCode"
              />
              {formikProps.errors.address &&
                formikProps.touched.address &&
                formikProps.errors.address.zipcode &&
                formikProps.touched.address.zipcode && (
                  <Text style={styles.error}>
                    {formikProps.errors.address.zipcode}
                  </Text>
                )}

              <StyledInput
                label="Contact Number"
                formikProps={formikProps}
                formikKey="contactNumber"
                placeholder="Contact Number"
              />
              {formikProps.touched.contactNumber &&
                formikProps.errors.contactNumber && (
                  <Text style={styles.error}>
                    {formikProps.errors.contactNumber}
                  </Text>
                )}

              <StyledInput
                label="User Id"
                formikProps={formikProps}
                formikKey="userId"
                placeholder="User Id"
              />
              {formikProps.touched.userId && formikProps.errors.userId && (
                <Text style={styles.error}>{formikProps.errors.userId}</Text>
              )}

              <StyledInput
                label="Password"
                formikProps={formikProps}
                formikKey="password"
                placeholder="Password"
                secureTextEntry
              />
              {formikProps.touched.password && formikProps.errors.password && (
                <Text style={styles.error}>{formikProps.errors.password}</Text>
              )}

              <Button
                title="Add"
                style={styles.btn}
                onPress={formikProps.handleSubmit}
              />
            </React.Fragment>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginHorizontal: 20,
  },

  btn: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default AddDeliveryBoy;

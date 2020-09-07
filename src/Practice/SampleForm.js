import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header } from "react-native-elements";
import StyledInput from "../components/StyledInput";

const SampleForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    address: Yup.object().shape({
      longitude: Yup.string().label("Longitude").required(),
      latitude: Yup.string().label("Latitude").required(),
      zipcode: Yup.string().label("ZipCode").required(),
    }),
  });

  return (
    <React.Fragment>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Sample Form", style: { color: "#fff" } }}
      />
      <KeyboardAwareScrollView style={{ marginTop: 20 }}>
        <Formik
          initialValues={{
            firstName: "",
            address: {
              longitude: "",
              latitude: "",
              zipcode: "",
            },
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

              {formikProps.touched.firstName &&
                formikProps.errors.firstName && (
                  <Text style={styles.error}>
                    {formikProps.errors.firstName}
                  </Text>
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
});

export default SampleForm;

import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  select,
} from "react-native";
//import styled from "@emotion/styled";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Text>{label}</Text>
      <TextInput {...field} {...props} />
      {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Text className="checkbox">
        <TextInput type="checkbox" {...field} {...props} />
        {children}
      </Text>
      {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
    </>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <View>
      <Text>Subscribe!</Text>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <Button type="submit" title="sign up">
            <Text>Sign up</Text>
          </Button>
        </Form>
      </Formik>
    </View>
  );
};

export default SignupForm;

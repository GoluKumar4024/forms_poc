import React, { Component } from "react";
import { useFormik } from "formik";
import MySwitch from "../components/MySwitch";
import MyTextInput from "../components/MyTextInput";
import { View, Text, StyleSheet, Button } from "react-native";
//import * as Yup from "yup";

const SignUp = () => {
  const axios = require("axios").default;

  const formikProps = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgree: false,
    },

    /*

      const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(15, "must be less than or equal to 15")
        .required("Required"),

      lastName: Yup.string()
        .max(15, "must be less than or equal to 15")
        .required("Required"),

      mobileNumber: Yup.string().matches(
        phoneRegExp,
        "Mobile number is not valid"
      ),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .required("Required")
        .min(2, "very short password")
        .max(20, "We prefer a medium sized password"),

      confirmPassword: Yup.string()
        .test("passwords-matching", "Passwords must match", function (value) {
          return this.parent.password === value;
        })
        .required("Required"),

      isAgree: Yup.boolean().test(
        "isAgreed",
        "Please Agree to erms and conditions",
        (value) => value === true
      ),
    }),

    https://b35ecf089e42004cee17e338d728bb4a.m.pipedream.net
    */

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post("http://192.168.43.174:8080/user", values)
        .then((response) => console.log(response))
        .catch((error) => console.log("error is ", error));
    },
  });
  // console.log(formikProps);
  return (
    <View style={styles.container}>
      <MyTextInput placeholder="First Name" name="firstName" {...formikProps} />
      <MyTextInput placeholder="Last Name" name="lastName" {...formikProps} />
      <MyTextInput
        placeholder="Mobile Number"
        name="mobileNumber"
        {...formikProps}
      />
      <MyTextInput placeholder="Email" name="email" {...formikProps} />
      <MyTextInput placeholder="Password" name="password" {...formikProps} />
      <MyTextInput
        placeholder="Confirm Password"
        name="confirmPassword"
        {...formikProps}
      />
      <Text style={styles.textStyle}>I accept the terms and conditions</Text>
      <MySwitch name="isAgree" {...formikProps} />
      <View>
        <Button
          title="Sign Up"
          style={styles.btnStyle}
          onPress={formikProps.handleSubmit}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
  btnStyel: {
    backgroundColor: "tomato",
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

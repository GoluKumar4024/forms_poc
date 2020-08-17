import React, { Component } from "react";
import { useFormik } from "formik";
import MySwitch from "../components/MySwitch";
import MyTextInput from "../components/MyTextInput";
import { View, Text, StyleSheet, Button } from "react-native";

const SignUp = () => {
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // console.log(formikProps);
  return (
    <View>
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
});

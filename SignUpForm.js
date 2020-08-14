import React, { Component } from "react";
import { useFormik, Form } from "formik";
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileNo: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label>Mobile No</label>
      <input
        id="mobileNo"
        name="mobileNo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.mobileNo}
      />

      <label>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label>Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
//const styles = StyleSheet.create({});

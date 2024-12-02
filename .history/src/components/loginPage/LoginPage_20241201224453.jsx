import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import WrapperInput from "../wrapperInput/WrapperInput";
import "../../style/loginPage.css";
export default function LoginPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must Be Like E-mail Format")
      .required("E-mail is Requird"),
    password: Yup.string().min(7).max(15).required("Password is Requird"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    navigate("/home");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <WrapperInput name={"email"} isDefault />
          <WrapperInput name={"password"} isPassword />
          <button type="submit">login</button>
        </Form>
      </Formik>
    </div>
  );
}

import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import WrapperInput from "../wrapperInput/WrapperInput";
export default function LoginPage() {

    const validationSchema = Yup.object({
        email: Yup.string().email("Must Be Like ").required("email is 7amada"),
        password: Yup.string().min(7).max(15).required("password is 7amada"),
    });
    const initialValues = {
        email: "",
        password: "",
    };
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <WrapperInput name={"email"} isDefault />
                    <WrapperInput name={"password"} isPassword />
                    <button type="submit">login</button>
                </Form>
            </Formik>
        </div>
    );
}

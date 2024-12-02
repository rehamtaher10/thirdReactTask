import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMessageField from "./ErrorMessageField";

export default function WrapperInput({ name, placeholder ,isDefault ,isPassword,label}) {
    return (
        <div className="wrapper_input">
            {isDefault && <Field name={name} placeholder={placeholder} />}
            {isPassword && (
                <Field name={name} placeholder={placeholder}>
                    {({ field }) => <input type="password" {...field} />}
                </Field>
            )}
            <ErrorMessage name={name} component={ErrorMessageField} />
        </div>
    );
}


// React Basics (Folder Structure - Components - Props - State)
// Style (External - Sass + Bem - Bootrstrap  - MUI)
// Hooks (UseState - UseEffect - UseContext - UseRef)
// Routes (React Router Dom)
// Formik + Yup 
// State Management (React Query + Redux)
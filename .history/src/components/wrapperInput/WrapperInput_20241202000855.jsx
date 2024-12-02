import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMessageField from "./ErrorMessageField";
import {RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

export default function WrapperInput({ name, placeholder ,isDefault ,isPassword,label}) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };
    return (
        <div className="wrapper_input">
            {label && <label htmlFor={name}>{label}</label>} 
            <br/>
            {isDefault && <Field name={name} placeholder={placeholder} />}
            {isPassword && (
        <div className="password-wrapper">
          <Field id={name} name={name}>
            {({ field }) => (
              <input
                type={showPassword ? "text" : "password"}
                {...field}
                placeholder={placeholder}
              />
            )}
          </Field>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="toggle-password-btn"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
          </button>
        </div>
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
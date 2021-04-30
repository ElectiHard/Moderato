import React from "react";
import { Formik, Field, Form, ErrorMessage,  } from "formik";
import * as Yup from "yup";
import './styles.css';

export default function SignUp() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, {resetForm }) => {
        alert("brawo, działa\n\n" + JSON.stringify(values, null, 4));
        resetForm();
      }}
      render={({ errors, status, touched }) => (
        <div className="sign-up-form">
          <Form>
            <div className="form-group">
              <div className="better-label">Username</div>
              <Field
                name="username"
                type="text"
                className={
                  "form-control" +
                  (errors.username && touched.username ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <div className="better-label">Password</div>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit" >
                Register
              </button><br />
              <div className="some-text">Forgot your password? <a href="./SignUp">Reset</a></div>
            </div>
          </Form>
        </div>
      )}
    />
  );
}
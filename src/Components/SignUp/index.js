import React from "react";
import navBar from '../navbar.js'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './styles.css';

export default function SignUp() {
  return (
    <>
    {navBar}
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(fields) => {
        alert("brawo, działa\n\n" + JSON.stringify(fields, null, 4));
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
              <div className="better-label">E-mail</div>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
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
            <div className="form-group-exception">
              <div className="better-label">Confirm Password</div>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <div className="some-text">By clicking "Register" you agree to almost everything including our <a>Privacy Policy</a> (link to be) and promotional content via e-mail.</div>
              <button type="submit" className="submit">
                Register
              </button><br />
              <div className="some-text">Already have an account? <a>Sign in</a></div>
            </div>
          </Form>
        </div>
      )}
    />
    </>
  );
}
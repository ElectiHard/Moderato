import React from "react";
import navBar from "../navbar.js";
import "./signupbutton.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";
import Tabs from "../Tabs";
import Ripples from "react-ripples";

export default function SignUp() {
  return (
    <>
      {navBar}
      <div className="sign-up-box">
        <Tabs>
          <div label="Sign Up" id="left-tab">
            <div className="sign-up-form">
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required("Username is required"),
                  password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required"),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .required("Confirm Password is required"),
                })}
                onSubmit={(fields) => {
                  alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
                }}
                render={({ errors, status, touched }) => (
                  <div>
                    <Form>
                      <div className="form-group">
                        <div className="better-label"></div>
                        <Field
                          name="username"
                          type="text"
                          placeholder="Username"
                          className={
                            "form-control" +
                            (errors.username && touched.username
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <div className="better-label"></div>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group-exception">
                        <div className="better-label"></div>
                        <Field
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
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
                        <div
                          style={{
                            width: "70%",
                            backgroundColor: "red",
                            display: "inline-flex",
                            borderRadius: 25,
                            overflow: "hidden",
                          }}
                        >
                          <Ripples
                            className="sign-up-ripple"
                            during={1800}
                            color={"rgba(3, 37, 73,0.2)"}
                          >
                            <button
                              type="button"
                              className="submit-sign-up-button"
                            >
                              <div>Register</div>
                            </button>
                          </Ripples>
                        </div>
                        <br />
                        <br />
                        <div className="some-text">
                          By clicking "Register" you agree to almost everything
                          including our <a>Privacy Policy</a> (link to be) and
                          promotional content via e-mail.
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              />
            </div>
          </div>
          <div label="Sign In" id="right-tab">
            <div className="sign-up-form">
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required("Username is required"),
                  password: Yup.string()
                    .required("Password is required"),
                })}
                onSubmit={(fields) => {
                  alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
                }}
                render={({ errors, status, touched }) => (
                  <div>
                    <Form>
                      <div className="form-group">
                        <div className="better-label"></div>
                        <Field
                          name="username"
                          type="text"
                          placeholder="Username"
                          className={
                            "form-control" +
                            (errors.username && touched.username
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <div className="better-label"></div>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <div
                          style={{
                            width: "70%",
                            backgroundColor: "red",
                            display: "inline-flex",
                            borderRadius: 25,
                            overflow: "hidden",
                          }}
                        >
                          <Ripples
                            className="sign-up-ripple"
                            during={1800}
                            color={"rgba(3, 37, 73,0.2)"}
                          >
                            <button
                              type="button"
                              className="submit-sign-up-button"
                            >
                              <div>Sign In</div>
                            </button>
                          </Ripples>
                        </div>
                        <br />
                        <br />
                        <div className="some-text">
                          Forgot password? <a href='./'>Reset!</a>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}

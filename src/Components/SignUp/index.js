import { React, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import navBar from "../navbar.js";
import "./signupbutton.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";
import Ripples from "react-ripples";

function TabPanel({ children, value, index }) {
  return <>{value === index && <div>{children}</div>}</>;
}

export default function SignUp() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {navBar}
      <div className="sign-up-box">
        <Tabs className="tab-list" value={value} onChange={handleChange}>
          <Tab className="tab-list-item" label="Sign Up" />
          <Tab className="tab-list-item" label="Sign In" />
        </Tabs>
        <TabPanel value={value} index={0}>
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

                      <Ripples
                        className="sign-up-ripple"
                        during={1800}
                        color={"rgba(3, 37, 73,0.2)"}
                      >
                        <button
                          type="button"
                          className="submit-sign-up-button"
                        >
                          Register
                          </button>
                      </Ripples>

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
        </TabPanel>
        <TabPanel value={value} index={1}>
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
                      <Ripples
                        className="sign-up-ripple"
                        during={1800}
                        color={"rgba(3, 37, 73,0.2)"}
                      >
                        <button
                          type="button"
                          className="submit-sign-up-button"
                        >
                          Sign In
                          </button>
                      </Ripples>
                      <br />
                      <br />
                      <div className="some-text">
                        Forgot password?
                          <a style={{ color: "#083D77", textDecoration: "none" }} href='./'> Reset!</a>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            />
          </div>
        </TabPanel>
      </div>
    </>
  );
}
import { React, useState, useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import { Link, useParams, useHistory } from 'react-router-dom'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import signUpNavBar from "../signupnavbar.js";
import "./signupbutton.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";

function TabPanel({ children, value, index }) {
  return <>{value === index && <div>{children}</div>}</>;
}



export default function SignUp() {
  const tab = useParams()
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [value, setValue] = useState(Number(tab.tab));

  const tabChange = (event, newValue) => {
    setValue(newValue);
  };

  const register = ({ username, password }) => {
    fetch("https://moderato-backend.herokuapp.com/api/v1/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then(({ status }) => {
      if (status === 200) {
        login({ username, password });
      } else {
        alert("Ojoj");
      }
    });
  };

  const login = ({ username, password }) => {
    fetch("https://moderato-backend.herokuapp.com/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then(({ JWT }) => {
        authContext.setToken(JWT);
        history.push("/");
      });
  };

  return (
    <>
      {signUpNavBar}
      <div className="sign-up-box">
        <Tabs className="tab-list" value={value} onChange={tabChange}>
          <Tab className="tab-list-item" label="Sign Up" />
          <Tab className="tab-list-item" label="Sign In" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="sign-up-form">
            <Formik
              initialValues={{
                username: "",
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
              onSubmit={register}
              render={({
                errors,
                status,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="form-group">
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <Button
                      className="submit-sign-up-button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <div>Register</div>
                    </Button>

                    <div className="some-text">
                      By clicking "Register" you agree to almost everything
                      including our <a>Privacy Policy</a> (link to be) and
                      promotional content via e-mail.
                    </div>
                  </div>
                </Form>
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
                password: Yup.string().required("Password is required"),
              })}
              onSubmit={login}
              render={({
                errors,
                status,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
              }) => (
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <Button
                        className="submit-sign-up-button"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <div>Sign In</div>
                      </Button>
                      <div className="some-text">
                        Forgot password?
                        <a
                          style={{ color: "#083D77", textDecoration: "none" }}
                          href="./"
                        >
                          {" "}
                          Reset!
                        </a>
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

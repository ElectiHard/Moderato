import navBar from "../navbar.js";
import footer from "../footer.js";
import { FaFolderMinus, FaFolderPlus } from "react-icons/fa";
import "./styles.css";
import React, { useContext, useState } from "react";
import ImageUploading from "react-images-uploading";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../Context/authContext";

const btnChanger = (a) => {
  if (a != 5) {
    return <FaFolderPlus />;
  } else {
    return <FaFolderMinus />;
  }
};

export default function Creator() {
  const token = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const createListing = ({ username, password }) => {
    fetch("https://moderato-backend.herokuapp.com/api/v1/listings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authication: token },
      body: JSON.stringify({ username, password }),
    });
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      {navBar()}

      <div className="creator">
        <Formik
          initialValues={{
            title: "",
            category: "",
            description: "",
            email: "",
            phone: "",
            city: "",
            price: "",
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().max(100, "Too long!"),
            category: Yup.string(),
            description: Yup.string().max(2500, "Too long!"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            phone: Yup.string()
              .min(9, "Too Short!")
              .max(11, "Too Long!")
              .required("Required"),
            city: Yup.string().required("City is required"),
            price: Yup.number()
              .min(0, "Can't go below 0!")
              .max(1000000000, "Ya sure it's a right site for that?")
              .required("Price is required"),
          })}
          onSubmit={createListing}
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
            <>
              <Form onSubmit={handleSubmit} className="creator-header">
                <div className="title">
                  <label>Title</label>
                  <Field
                    name="title"
                    type="text"
                    placeholder="Title e.g siodło z dyskontu"
                    className={
                      "creator-form-control" +
                      (errors.title && touched.title ? " is-invalid" : "")
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="creator-invalid-feedback"
                  />
                </div>
                <div className="creator-category">
                  <label>Category</label>
                  <Field
                    name="category"
                    type="text"
                    placeholder="Title e.g siodło z dyskontu"
                    className={
                      "creator-form-control" +
                      (errors.category && touched.category ? " is-invalid" : "")
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="creator-invalid-feedback"
                  />
                </div>
              </Form>
              <div className="creator-pictures">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  resolutionType="ratio"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <>
                      <button
                        className="photo-upload-btn"
                        onClick={onImageUpload}
                        {...dragProps}
                        disabled={imageList.length == 5}
                      >
                        {btnChanger(imageList.length)}
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" />
                          <button
                            onClick={() => onImageRemove(index)}
                            className="remove-btn"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </>
                  )}
                </ImageUploading>
              </div>
              <Form>
                <div className="description">
                  <Field
                    name="description-input"
                    type="text"
                    component="textarea"
                    placeholder="Title e.g siodło z dyskontu"
                    className={
                      "creator-form-control" +
                      (errors.description && touched.description
                        ? " is-invalid"
                        : "")
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="creator-invalid-feedback"
                  />
                  <div className="contact-location">
                    <div className="creator-form">
                      <Field
                        name="email"
                        type="text"
                        placeholder="email"
                        className={
                          "creator-form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="creator-invalid-feedback"
                      />
                    </div>

                    <div className="creator-form">
                      <Field
                        name="phone"
                        type="number"
                        placeholder="+48..."
                        className={
                          "creator-form-control" +
                          (errors.phone && touched.phone ? " is-invalid" : "")
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="creator-invalid-feedback"
                      />
                    </div>

                    <div className="creator-form">
                      <Field
                        name="city"
                        type="text"
                        placeholder="city"
                        className={
                          "creator-form-control" +
                          (errors.city && touched.city ? " is-invalid" : "")
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="creator-invalid-feedback"
                      />
                    </div>

                    <div className="creator-form">
                      <Field
                        name="price"
                        type="number"
                        placeholder="price"
                        className={
                          "creator-form-control" +
                          (errors.price && touched.price ? " is-invalid" : "")
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="creator-invalid-feedback"
                      />
                    </div>
                    <Button className="submit-sign-up-button" type="submit">
                      <div>Publish</div>
                    </Button>
                  </div>
                </div>
              </Form>
            </>
          )}
        />
      </div>
      {footer}
    </>
  );
}

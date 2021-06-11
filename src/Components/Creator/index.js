import navBar from "../navbar.js";
import footer from "../footer.js";
import { FaFolderMinus, FaFolderPlus } from "react-icons/fa";
import "./styles.css";
import React, { useContext, useState, useEffect } from "react";
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
  const [categoriesList, setCategoriesList] = useState([]);
  const { token } = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  useEffect(() => {
    fetch(`https://moderato-backend.herokuapp.com/api/v1/categories/`)
      .then(response => response.json())
      .then(data => setCategoriesList(data.subCategories));
  }, [])

  function categoriesOptions() {
    return (
      categoriesList.map(element => {
        return (
          <option value={element.subCategoryId} label={element.subCategoryName} />
        )
      })
    )
  }

  const createListing = ({ name, subCategoryId, description, email, phone, price, city }) => {
    const contacts = JSON.stringify({ email, phone, city });
    fetch("https://moderato-backend.herokuapp.com/api/v1/listings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `bajojajo ${token}` },
      body: JSON.stringify({ name, subCategoryId, description, contacts, price }),
    })
      .then(res => res.json())
      .then(data => {
        images.map((image) => {
          const formData = new FormData();
          formData.append('file', image.file);
          console.log(image.file)
          fetch(`https://moderato-backend.herokuapp.com/api/v1/photos/${data.listingId}`, {
            method: "POST",
            mode: "no-cors",
            headers: { "Authorization": `bajojajo ${token}` },
            body: formData
          })
        })
      })
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
            name: "",
            subcategory: "",
            description: "",
            email: "",
            phone: "",
            city: "",
            price: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .max(100, "Too long!")
              .required("Title is required"),
            subCategoryId: Yup.number()
              .required("Subcategory is required"),
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
                  <div className="creator-form-control">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Title e.g siodło z dyskontu"
                      className={
                        (errors.title && touched.title ? " is-invalid" : "")
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="creator-invalid-feedback"
                    />
                  </div>
                </div>
                <div className="creator-category">
                  <label>Subcategory</label>
                  <div className="creator-form-control">
                    <Field
                      name="subCategoryId"
                      component="select"
                      className={
                        (errors.category && touched.category ? " is-invalid" : "")
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subCategoryId}
                    >
                      {categoriesOptions()}
                    </Field>
                    <ErrorMessage
                      name="subCategoryId"
                      component="div"
                      className="creator-invalid-feedback"
                    />
                  </div>
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
                    name="description"
                    type="text"
                    component="textarea"
                    placeholder="Title e.g siodło z dyskontu"
                    className={
                      (errors.description && touched.description ? " is-invalid" : "")
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
                    <div className="creator-form-control">
                      <Field
                        name="email"
                        type="text"
                        placeholder="email"
                        className={
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
                    <div className="creator-form-control">
                      <Field
                        name="phone"
                        type="number"
                        placeholder="+48..."
                        className={
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

                    <div className="creator-form-control">
                      <Field
                        name="city"
                        type="text"
                        placeholder="city"
                        className={
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
                    <div className="creator-form-control">
                      <Field
                        name="price"
                        type="number"
                        placeholder="price"
                        className={
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

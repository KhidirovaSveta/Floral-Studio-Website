import React from "react";
import { Formik, Form, Field } from "formik";
import { AddSchema } from "./schema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import {Helmet} from "react-helmet";

const AddFlower = () => {
  const navigate = useNavigate();

  return (
    <div id="addFlower">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <div className="container">
        <div className="formik">
          <h1 className="addHeader"> Add Flower</h1>
          <Formik
            initialValues={{
              img: "",
              name: "",
              price: "",
            }}
            validationSchema={AddSchema}
            onSubmit={(values) => {
              axios.post(`http://localhost:8080/`, values);
              navigate("/");
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-input">
                  <Field name="img" placeholder="img" />
                  {errors.img && touched.img ? <div className="red">{errors.img}</div> : null}
                </div>

                <div className="form-input">
                  <Field name="name" placeholder="name" />
                  {errors.name && touched.name ? (
                    <div className="red">{errors.name}</div>
                  ) : null}
                </div>

                <div className="form-input">
                  <Field name="price" placeholder="price" />
                  {errors.price && touched.price ? (
                    <div className="red">{errors.price}</div>
                  ) : null}
                </div>

                <button type="submit" className="addItemBtn">
                  {" "}
                  Add{" "}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddFlower;

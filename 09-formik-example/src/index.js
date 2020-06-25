// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {MyForm} from "./MyForm";

const App = () => (
  <div className="app">
    <h1>
      Basic{" "}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Formik
      </a>{" "}
      Demo
    </h1>

    <Formik
      initialValues={{ email: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => <MyForm {...props}/>}
    </Formik>

    <MoreResources />
  </div>
);

render(<App />, document.getElementById("root"));


import React from "react";
import { MoreResources, DisplayFormikState } from "./helper";

export const MyForm = (props) => {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset
    } = props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.email && touched.email
              ? "text-input error"
              : "text-input"
          }
        />
        {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}

        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
        <button type="submit" disabled={isSubmitting ||  
            Object.values(touched).every(fieldTouched => !fieldTouched) ||
            Object.values(errors).some(err => !!err === true)}>
          Submit
        </button>

        <DisplayFormikState {...props} />
      </form>
    );
  }
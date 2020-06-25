import React from 'react';
import { Formik, FormikErrors } from 'formik';
import { DisplayFormikState } from './FormicExample';

interface MyFormValues {
  email: string;
  password: string;
}

const Basic: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: '', password: '' }
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: FormikErrors<MyFormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <DisplayFormikState {...props} />
            </form>

          )
        }
        }
      </Formik>
    </div>
  )
};

export default Basic;
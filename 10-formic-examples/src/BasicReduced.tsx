import React from 'react';
import { Formik, FormikErrors, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { DisplayFormikState } from './FormicExample';

interface MyFormValues {
  email: string;
  password: string;
}

const BasicReduced: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: '', password: '' }
  return (
    <div>
      <h1>Any place in your app!</h1>
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
        {({ isSubmitting }) => {
          return (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage className="input-feedback" name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage className="input-feedback" name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <DisplayFormikState />
            </Form>
          )
        }
        }
      </Formik>
    </div>
  );
}

export default BasicReduced;